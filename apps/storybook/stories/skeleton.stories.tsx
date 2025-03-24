import { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '@repo/ui/skeleton';

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  args: {} satisfies Meta<typeof Skeleton>
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {}
};
