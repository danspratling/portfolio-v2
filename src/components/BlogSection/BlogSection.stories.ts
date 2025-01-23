import type { Meta, StoryObj } from "@storybook/react"
import { BlogSection } from "./BlogSection"
import { Default as BlogCardStory } from "./BlogCard.stories"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof BlogSection> = {
  title: "Components/BlogSection",
  component: BlogSection,
  // parameters: {
  //   docs: {
  //     description: {
  //       component:
  //         'The blog card is a link to a blog post. The small card is designed to be used alongside many other blog card components.',
  //     },
  //   },
  // },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof BlogSection>

const blogPost = BlogCardStory.args

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Small: Story = {
  args: {
    blogPosts: [blogPost, blogPost, blogPost, blogPost, blogPost, blogPost],
  },
}
