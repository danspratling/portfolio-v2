import { ArrowRightIcon } from "@untitledui-icons/react/line"
import { Button } from "@/Button"

export type ResourceProps = {
  title: string
  description: string
  link: JSX.IntrinsicElements["a"]
}

export const ResourceCard = ({ title, description, link }: ResourceProps) => {
  return (
    <a
      {...link}
      className="group text-center lg:max-w-4xl xl:max-w-5xl mx-auto grid gap-2 py-8 px-6 bg-gray-950 hover:bg-gray-900 duration-200 rounded-lg border border-white/10 cursor-pointer hover:no-underline"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {description && (
        <p className="max-w-md mx-auto text-gray-400">{description}</p>
      )}
      {link && (
        <p className="text-white font-normal flex items-center justify-center gap-2 mt-2">
          {link.title}
          <ArrowRightIcon className="size-4 group-hover:ml-1 group-hover:-mr-1 duration-200" />
        </p>
      )}
    </a>
  )
}
