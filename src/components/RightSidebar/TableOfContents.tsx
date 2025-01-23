import { useEffect, useRef, useState } from "react"
import { cn } from "#/src/utils"
import type { MarkdownHeading } from "astro"

type ItemOffsets = {
  id: string
  topOffset: number
}

const TableOfContents = ({
  headings = [],
}: {
  headings: MarkdownHeading[]
}) => {
  const toc = useRef<HTMLUListElement>()
  const onThisPageID = "on-this-page-heading"
  const itemOffsets = useRef<ItemOffsets[]>([])
  const [currentID, setCurrentID] = useState("overview")

  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("article :is(h1, h2, h3, h4)")

      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }))
    }

    getItemOffsets()
    window.addEventListener("resize", getItemOffsets)

    return () => {
      window.removeEventListener("resize", getItemOffsets)
    }
  }, [])

  useEffect(() => {
    if (!toc.current) return

    console.log(toc.current)

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target
          if (id === onThisPageID) continue
          setCurrentID(entry.target.id)
          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: "-100px 0% -66%",
      threshold: 1,
    }

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions
    )

    // Observe all the headings in the main page content.
    document
      .querySelectorAll("article :is(h1,h2,h3)")
      .forEach((h) => headingsObserver.observe(h))

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect()
  }, [toc.current])

  const onLinkClick = (e) => {
    setCurrentID(e.target.getAttribute("href").replace("#", ""))
  }

  return (
    <nav className="relative pb-2">
      <h2
        id={onThisPageID}
        className="sr-only font-semibold text-gray-900 mb-1"
      >
        On this page
      </h2>
      <div className="absolute -mt-1 h-full w-1 rounded-md bg-gray-100 opacity-80">
        <span
          className="absolute w-1 rounded-md bg-gradient-to-b from-primary-400 to-primary-600 transition-all duration-100 ease-out"
          style={{
            height: Math.ceil(100 / headings.length) + "%",
            top: 0,
            // Math.ceil(
            //   (headings.findIndex(
            //     (section: { id: string }) => section?.id === currentSection
            //   ) /
            //     headings.length) *
            //     100
            // ) + "%",
          }}
        />
      </div>
      <ul ref={toc} className="list-none">
        {headings
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map((heading) => (
            <li
              key={heading.slug}
              className={`header-link depth-${heading.depth} transition duration-100 ease-out ${
                currentID === heading.slug ? "text-gray-50" : "text-gray-400"
              }`.trim()}
            >
              <a
                href={`#${heading.slug}`}
                onClick={onLinkClick}
                className={cn(
                  "block text-inherit py-1 hover:underline focus:underline",
                  heading.depth === 3 && "pl-3 text-[0.825rem]"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
