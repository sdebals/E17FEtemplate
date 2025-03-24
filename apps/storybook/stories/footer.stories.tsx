import { Meta, StoryObj } from '@storybook/react';

import { Footer } from '@repo/ui/footer';

import { mockedSocialLinks, mockedMainNavigation } from '../mocks/navigation';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  args: {} satisfies Meta<typeof Footer>
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    menuLinks: mockedMainNavigation,
    socialLinks: mockedSocialLinks,
    copyright: '© All rights reserved.',
    message: 'Storyblok Next.js Starter'
  }
};
