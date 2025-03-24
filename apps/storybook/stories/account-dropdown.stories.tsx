import { Meta, StoryObj, StoryFn } from '@storybook/react';

import { AccountDropdown } from '@repo/ui/header';

const meta = {
  title: 'Layout/SecondaryNavigation/AccountDropdown',
  component: AccountDropdown,
  args: {} satisfies Meta<typeof AccountDropdown>,
  decorators: [
    (Story: StoryFn) => (
      <div className="w-56">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof AccountDropdown>;

export const LoggedOut: Story = {
  args: {
    loggedIn: false,
    userNavigation: [
      { label: 'Login', href: '/en/login' },
      { label: 'Create account', href: '/en/logout' }
    ],
    labels: { open: 'Open user menu', account: 'Account' }
  }
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
    userNavigation: [
      { label: 'Your Profile', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Sign out', href: '#', onClick: () => alert('Sign out!') }
    ],
    labels: { open: 'Open user menu', account: 'Account' }
  }
};
