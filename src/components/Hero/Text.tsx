import { Image } from "@/Image"
import { TextRevealOnScroll } from "@/animations/TextRevealOnScroll"

type HeroProps = {
  title: string | JSX.Element
  description?: string | JSX.Element
  status?: string | JSX.Element
}

export const Hero = ({ title, description, status }: HeroProps) => {
  return (
    <section className="bg-gray-950">
      <div className="container">
        <div className="flex relative">
          <div className="w-full">
            <div className="grid items-center min-h-[100vh] max-w-xl">
              {/* Non-highlighted text starts at 800, lightens to 200 as user scrolls */}
              <div className="grid text-gray-200">
                <h1 className="text-3xl font-semibold mb-6">{title}</h1>
                <p className="max-w-prose mx-auto text-3xl font-semibold mb-2">
                  {description}
                </p>
                {status && <p className="font-light">{status}</p>}
              </div>
            </div>
            <div className="relative grid items-center min-h-[100vh] max-w-xl">
              <div className="grid">
                <TextRevealOnScroll className="max-w-prose mx-auto text-2xl font-light mb-2">
                  Today, I work at Skyward Digital. I love obsessing over things
                  that make developers, designers and users lives easier, from
                  demystifying complex features to creating delightful
                  micro-interactions.
                </TextRevealOnScroll>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* starts at opacity 0, goes to 100% on scroll */}
            <div className="sticky top-0 min-h-screen flex items-center justify-center w-full">
              <Image
                src="/DanSpratling.jpg"
                alt="Hero"
                className="rounded-md border border-white/20"
                width="500"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
