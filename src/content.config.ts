// Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content"
import { glob } from "astro/loaders"

// Define a `type` and `schema` for each collection
const blog = defineCollection({
  // Load all posts except ones that start with an underscore, which is used for templates
  loader: glob({ pattern: ["*.md", "!_*"], base: "src/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // icon: z.string().optional(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    isDraft: z.boolean().optional(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
}
