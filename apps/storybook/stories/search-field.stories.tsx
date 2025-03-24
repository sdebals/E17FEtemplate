import { Meta, StoryObj } from '@storybook/react';

import SearchField from '@repo/ui/search-field';

const meta = {
  title: 'Atoms/SearchField',
  component: SearchField,
  args: {} satisfies Meta<typeof SearchField>
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    }
  }
};
