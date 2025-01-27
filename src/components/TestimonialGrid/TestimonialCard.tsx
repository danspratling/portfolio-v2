import { type AvatarProps, Avatar } from "@/Avatar"

export type TestimonialProps = {
  testimonial?: string
  author: {
    name?: string
    role?: string
    company?: string
    avatar: AvatarProps
  }
}

export const TestimonialCard = ({ testimonial, author }: TestimonialProps) => {
  return (
    <div className="grid gap-2 py-8 px-6 bg-gray-950 rounded-lg border border-white/20 border-dashed cursor-pointer hover:no-underline">
      <p className="text-gray-200 font-normal text-left text-sm">
        {testimonial}
      </p>
      <div className="flex items-center justify-start gap-2 mt-2">
        <Avatar {...author.avatar} />
        <div className="text-left">
          <p className="text-white font-semibold">{author.name}</p>
          <p className="text-gray-200 text-sm">
            {author.role} at {author.company}
          </p>
        </div>
      </div>
    </div>
  )
}
