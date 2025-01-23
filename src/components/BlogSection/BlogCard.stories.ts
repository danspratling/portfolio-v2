import type { Meta, StoryObj } from "@storybook/react"
import { BlogCard } from "./BlogCard"
import { PlaceholderIcon } from "@untitledui-icons/react/line"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof BlogCard> = {
  title: "Components/BlogCard",
  component: BlogCard,
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

type Story = StoryObj<typeof BlogCard>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    slug: "the-roi-of-ux-why-continually-improving-ux-is-good-for-business",
    tags: ["UX", "design", "business"],
    icon: PlaceholderIcon,
    publishDate: new Date("2023-02-13T12:00:00.000Z").toLocaleDateString(
      "en-GB",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    ),
  },
}
