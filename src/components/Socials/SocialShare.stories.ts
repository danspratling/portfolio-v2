import type { Meta, StoryObj } from '@storybook/react';
import { SocialShare } from './SocialShare';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SocialShare> = {
  title: 'Components/Socials/SocialShare',
  component: SocialShare,
  parameters: {
    docs: {
      description: {
        component:
          'Allows for preset social media sharing links to be generated.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SocialShare>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
