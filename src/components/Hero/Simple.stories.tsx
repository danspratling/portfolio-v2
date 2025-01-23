import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "./Simple"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Hero> = {
  title: "Components/Hero/Simple",
  component: Hero,
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

type Story = StoryObj<typeof Hero>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Simple: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet",
  },
}
