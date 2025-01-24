import { Button } from "@/Button"
import { TestimonialCard, type TestimonialProps } from "./TestimonialCard"

type TestimonialGridProps = {
  title: string
  description?: string
  link?: JSX.IntrinsicElements["a"]
  testimonials: TestimonialProps[]
}

export const TestimonialGrid = ({
  title,
  description,
  link,
  testimonials,
}: TestimonialGridProps) => {
  return (
    <section className="bg-gray-950 text-gray-200 py-12">
      <div className="container lg:max-w-4xl xl:max-w-5xl mx-auto my-20 xl:my-40 grid gap-6">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-semibold mb-2">{title}</h2>
            {description && (
              <p className="max-w-md mx-auto text-gray-400 tracking-wide">
                {description}
              </p>
            )}
          </div>
          {link && <Button variant="primary" {...link} />}
        </div>

        <div className="grid gap-1.5 sm:grid-cols-2 md:grid-cols-3 my-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
