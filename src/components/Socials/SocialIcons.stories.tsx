import type { Meta, StoryObj } from '@storybook/react';
import { SocialIcons } from './SocialIcons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SocialIcons> = {
  title: 'Components/Socials/SocialIcons',
  component: SocialIcons,
  parameters: {
    docs: {
      description: {
        component:
          'The contact form is a split screen element with content on the left and a form on the right. The form is a detailed form with the option for multiple form screens.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SocialIcons>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    className: 'text-gray-800',
  },
};
