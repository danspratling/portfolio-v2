import type { Meta, StoryObj } from "@storybook/react"
import { TestimonialGrid } from "./TestimonialGrid"
import { Default as TestimonialCard } from "./TestimonialCard.stories"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TestimonialGrid> = {
  title: "Components/TestimonialGrid",
  component: TestimonialGrid,
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

type Story = StoryObj<typeof TestimonialGrid>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
    link: {
      href: "#",
      children: "Link",
    },
    testimonials: [
      TestimonialCard.args,
      TestimonialCard.args,
      TestimonialCard.args,
      TestimonialCard.args,
      TestimonialCard.args,
      TestimonialCard.args,
    ],
  },
}
