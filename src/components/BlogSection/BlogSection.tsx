import { BlogCard, type BlogCardProps } from "./BlogCard"

type BlogSectionProps = {
  blogPosts: BlogCardProps[]
}

export const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  return (
    <section className="bg-gray-950 dark:bg-gray-950 py-12">
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  )
}
