type TestimonialGridProps = {
  title: string
  description: string
  testimonials: TestimonialProps[]
}

export const TestimonialGrid = ({
  title,
  description,
  testimonials,
}: TestimonialGridProps) => {
  const groupSize = testimonials.length / 3
  const chunkedArray = new Array(Math.ceil(testimonials.length / groupSize))
    .fill(null)
    .map((_, i) => testimonials.slice(i * groupSize, i * groupSize + groupSize))

  return (
    <section className="bg-neutral-muted my-8 lg:my-24">
      <div className="py-8 xl:py-12">
        <div className="container">
          <div className="mt-8 mb-16 xl:text-left mx-auto max-w-2xl">
            <h2 className="mb-8 text-center">{title}</h2>
            <p className="text-center">{description}</p>
          </div>
          <div className="-mx-4 px-2 py-6 overflow-x-scroll md:overflow-visible scrollbar-hidden">
            <div className="grid lg:grid-cols-3 gap-4">
              {chunkedArray.map((chunk, index) => (
                <div key={index} className="grid content-start gap-4 px-2">
                  {chunk.map((testimonial) => (
                    <TestimonialCard key={testimonial.quote} {...testimonial} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type TestimonialProps = {
  quote: string
  author: string
  company: string
  avatar: any
}

const TestimonialCard = ({
  quote,
  author,
  company,
  avatar,
}: TestimonialProps) => {
  return (
    <div key={quote} className="bg-neutral p-4 rounded shadow-xl">
      <p>{quote}</p>
      <div className="flex items-center mt-4">
        <img {...avatar} className="rounded-full" />
        <div className="ml-4">
          <p className="text-lg font-semibold mb-0">{author}</p>
          <p className="text-sm -mt-1 mb-1 opacity-75">{company}</p>
        </div>
      </div>
    </div>
  )
}
