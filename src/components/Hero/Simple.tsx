type HeroProps = {
  title: string
  description?: string
  link?: JSX.IntrinsicElements["a"]
}

export const Hero = ({ title, description, link }: HeroProps) => {
  return (
    <section className="container">
      <div className="text-center lg:max-w-4xl xl:max-w-5xl mx-auto my-20 xl:my-40 grid gap-6">
        <h1 className="text-6xl font-semibold">{title}</h1>
        {description && (
          <p className="max-w-prose mx-auto text-gray-400 text-lg font-normal tracking-wide">
            {description}
          </p>
        )}
        {link && <a {...link} className="btn btn-primary" />}
      </div>
    </section>
  )
}
