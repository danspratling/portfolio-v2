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
    <section className="container my-20 xl:my-40">
      <div className="flex flex-col gap-2 mb-16 text-center">
        <h2>{title}</h2>
        <p className="font-light text-gray-400">{description}</p>
        {link && <Button variant="primary" {...link} />}
      </div>
      <div className="text-center lg:max-w-4xl xl:max-w-5xl mx-auto">
        <div className="grid gap-1.5 md: grid-cols-3 my-4">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
