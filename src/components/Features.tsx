type FeaturesProps = {
  title: string
  features: FeatureProps[]
  link?: JSX.IntrinsicElements["a"]
}

export const Features = ({ title, features, link: link }: FeaturesProps) => {
  return (
    <section className="container">
      <div className="text-center py-8 xl:py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight md:text-5xl mb-12 lg:mb-24">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-12 lg:mb-24">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

type FeatureProps = {
  title: string
  // icon: string
  description: string
}

export const Feature = ({ title, icon, description }: FeatureProps) => {
  return (
    <div className="flex -mx-3 text-left">
      <div className="mx-3">
        <div className="bg-neutral-muted rounded-lg p-4 w-16 h-16 grid place-items-center">
          {/* <FontAwesomeIcon icon={['fal', icon]} className='text-2xl' /> */}
        </div>
      </div>
      <div className="mx-3">
        <h3 className="text-2xl mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
