import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { cn } from "#/src/utils"

export function TextRevealOnScroll({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["p"]) {
  if (!children) return null
  if (typeof children !== "string") return children

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,

    offset: [0, 1],
  })

  const words = children.split(" ")

  return (
    <div ref={container} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <p className={cn(" flex  flex-wrap gap-x-1", className)} {...props}>
          {words.map((word, i) => {
            const start = i / words.length

            const end = start + 1 / words.length

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative">
      <span className="absolute opacity-20">{children}</span>

      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}
