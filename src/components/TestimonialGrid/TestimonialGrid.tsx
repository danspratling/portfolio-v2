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
  const sortedTestimonials = (() => {
    const arr: TestimonialProps[][] = [[], [], []]

    testimonials
      .filter((testimonial) => testimonial.testimonial)
      .sort((a, b) => a.testimonial.length - b.testimonial.length)
      .map((testimonial, index) => {
        if (index % 3 === 0) arr[1].push(testimonial)
        else if (index % 3 === 1) arr[0].push(testimonial)
        else arr[2].push(testimonial)
      })

    const shuffleArray = (array) =>
      array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    return [shuffleArray(arr[0]), shuffleArray(arr[1]), shuffleArray(arr[2])]
  })()

  console.log(sortedTestimonials)

  return (
    <section className="bg-gray-950 text-gray-200 py-12">
      <div className="container mx-auto my-20 xl:my-40 grid gap-6">
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

        <div className="grid gap-3 md:grid-cols-3 my-4">
          <div className="flex flex-col gap-3">
            {sortedTestimonials[0].map((testimonial) => (
              <TestimonialCard key={testimonial.author.name} {...testimonial} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {sortedTestimonials[1].map((testimonial) => (
              <TestimonialCard key={testimonial.author.name} {...testimonial} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {sortedTestimonials[2].map((testimonial) => (
              <TestimonialCard key={testimonial.author.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
