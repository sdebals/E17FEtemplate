import { Meta, StoryObj } from '@storybook/react';

import { ColorCards } from '@repo/ui/color-cards';

const meta: Meta<typeof ColorCards> = {
  title: 'Blocks/ColorCards',
  component: ColorCards,
  args: {} satisfies Meta<typeof ColorCards>
};

export default meta;

type Story = StoryObj<typeof ColorCards>;

export const Default: Story = {
  args: {}
};
