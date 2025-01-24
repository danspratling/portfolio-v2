import { ArrowRightIcon } from "@untitledui-icons/react/solid"
import { Badge } from "#/src/components/Badge"

export type BlogCardProps = {
  title: string
  description: string
  slug: string
  tags: string[]
  publishDate: string
  icon: any
}

export const BlogCard = ({
  title,
  description,
  slug,
  tags,
  publishDate,
  icon: Icon,
}: BlogCardProps) => {
  return (
    <div className="bg-gray-950 hover:bg-gray-900 duration-200 rounded-lg p-5 border border-white/10">
      <a
        href={`/blog/${slug}`}
        className="flex flex-col gap-5 decoration-transparent mb-5"
      >
        <div className="flex gap-2.5 justify-between items-center">
          {/* <span className="border border-gray-800 bg-white/5 p-3 rounded-[10px]">
            <Icon className="w-8 h-8" />
          </span> */}
          <p className="text-sm text-gray-400 font-medium">
            {new Date(Date.parse(publishDate)).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="flex gap-4 mb-0.5 justify-between text-2xl text-gray-50 dark:text-gray-50">
          <h3 className="font-medium">{title}</h3>
          <ArrowRightIcon className="w-6 h-6 flex-shrink-0" />
        </div>
        <p className="text-gray-400 font-light">{description}</p>
      </a>
      {/* {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Badge key={tag}>
              <a href={`/blog/categories/${tag}`} className="text-inherit">
                {tag}
              </a>
            </Badge>
          ))}
        </div>
      )} */}
    </div>
  )
}
