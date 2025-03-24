import { Meta, StoryObj } from '@storybook/react';

import { SearchActionButton } from '@repo/ui/search-action-button';

const meta = {
  title: 'Atoms/ActionButtons/SearchActionButton',
  component: SearchActionButton,
  args: {} satisfies Meta<typeof SearchActionButton>
};

export default meta;

type Story = StoryObj<typeof SearchActionButton>;

export const Default: Story = {
  args: {
    onClick: () => window.alert('Search!')
  }
};
