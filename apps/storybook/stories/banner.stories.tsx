import { Meta, StoryObj } from '@storybook/react';

import { Banner } from '@repo/ui/header';

const meta = {
  title: 'Layout/Banner',
  component: Banner,
  args: {} satisfies Meta<typeof Banner>
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    text: (
      <p>
        <strong>TheRef is live</strong> · Join the conversation and get more info ·{' '}
        <a href="/">Read more</a>
      </p>
    ),
    labels: { dismiss: 'Dismiss' }
  }
};

export const WithDismiss: Story = {
  args: {
    text: (
      <p>
        <strong>TheRef is live</strong> · Join the conversation and get more info ·{' '}
        <a href="/">Read more</a>
      </p>
    ),
    labels: { dismiss: 'Dismiss' },
    onClose: () => window.alert('Dismissed!')
  }
};
