type CardCtaProps = {
  title: string
  description: string
  link: JSX.IntrinsicElements["a"]
  image: any
}

export const CardCta = ({ title, description, link, image }: CardCtaProps) => {
  return (
    <section className="container px-0 lg:px-4">
      <div className="max-w-5xl mx-auto my-8">
        <div className="bg-secondary rounded-lg w-full flex flex-1 flex-wrap md:flex-nowrap items-center overflow-hidden">
          <div
            className="relative h-full w-full text-secondary overflow-hidden"
            style={{ maxWidth: "22rem" }}
          >
            <img {...image} className="w-full h-auto" />
          </div>
          <div className="px-4 md:px-6 py-6 md:py-4">
            <div className="relative bg-neutral rounded-lg text-center md:text-left px-6 md:px-12 py-6 md:py-10 -mt-20 md:mt-0 md:-ml-12 z-10">
              <h2 className="mb-4 lg:mb-6">{title}</h2>
              <p className="mb-4 lg:mb-6">{description}</p>
              <a href={link.href} className="btn btn-inverted">
                {link.children}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
