import type { Meta, StoryObj } from "@storybook/react"
import { TestimonialCard } from "./TestimonialCard"
import { Default as Avatar } from "@/Avatar/Avatar.stories"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TestimonialCard> = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
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

type Story = StoryObj<typeof TestimonialCard>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam nec purus.",
    author: {
      name: "John Doe",
      role: "CEO",
      company: "Lorem Ipsum",
      avatar: Avatar.args,
    },
  },
}
