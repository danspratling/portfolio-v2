import { Button } from "@/Button"
import { ResourceCard, type ResourceProps } from "./ResourceCard"

type ResourcesProps = {
  title: string
  description?: string
  link?: JSX.IntrinsicElements["a"]
  resources: ResourceProps[]
}

export const ResourcesSection = ({
  title,
  description,
  link,
  resources,
}: ResourcesProps) => {
  return (
    <section className="container">
      <div className="text-center lg:max-w-4xl xl:max-w-5xl mx-auto my-20 xl:my-40 grid gap-6">
        <h2 className="text-3xl font-semibold">{title}</h2>
        {description && (
          <p className="max-w-md mx-auto text-gray-400 tracking-wide">
            {description}
          </p>
        )}
        {link && <Button variant="primary" {...link} />}

        <div className="grid gap-1.5 md: grid-cols-3 my-4">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
