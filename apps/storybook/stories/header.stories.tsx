import { Meta, StoryObj } from '@storybook/react';

import { Header, AccountDropdown, LanguageDropdown } from '@repo/ui/header';

import { mockedMainNavigation } from '../mocks/navigation';
import { mockLogo } from '../mocks/images';
import { CartActionButton } from '@repo/ui/cart-add-button';
import { SearchActionButton } from '@repo/ui/search-action-button';
import { mockedLocales } from '../mocks/locales';

const meta = {
  title: 'Layout/Header',
  component: Header,
  args: {
    // @ts-expect-error Storybook keeps typing error
    siteName: 'Storyblok Next.js Starter',
    logo: mockLogo,
    mainMenuLinks: mockedMainNavigation,
    labels: {
      navLabel: 'Global',
      open: 'Open main menu',
      close: 'Close menu'
    }
  } satisfies Meta<typeof Header>
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {}
};

export const WithLanguage: Story = {
  args: {
    actionComponents: [
      <LanguageDropdown
        key="language"
        languages={mockedLocales}
        activeLanguage={mockedLocales?.[0]?.id}
      />
    ]
  }
};

export const WithUserLoggedOut: Story = {
  args: {
    actionComponents: [
      <AccountDropdown
        key="account"
        labels={{ open: 'Open user menu', account: 'Account' }}
        loggedIn={false}
        userNavigation={[
          { label: 'Login', href: '/en/login' },
          { label: 'Create account', href: '/en/logout' }
        ]}
      />
    ]
  }
};

export const WithUserLoggedIn: Story = {
  args: {
    actionComponents: [
      <AccountDropdown
        key="account"
        labels={{ open: 'Open user menu', account: 'Account' }}
        loggedIn
        userNavigation={[
          { label: 'Your Profile', href: '#' },
          { label: 'Settings', href: '#' },
          { label: 'Sign out', href: '#', onClick: () => alert('Sign out!') }
        ]}
      />
    ]
  }
};

export const WithCart: Story = {
  args: {
    actionComponents: [
      <CartActionButton key="cart" quantity={1} onClick={() => alert('View cart!')} />
    ]
  }
};

export const WithSearch: Story = {
  args: {
    actionComponents: [<SearchActionButton key="search" onClick={() => alert('Search!')} />]
  }
};

export const WithSearchLangUserAndCart: Story = {
  args: {
    actionComponents: [
      <SearchActionButton key="search" onClick={() => alert('Search!')} />,
      <span key="divider" className="mx-0.5 h-6 border-l border-gray-300" />,
      <LanguageDropdown
        key="language"
        languages={mockedLocales}
        activeLanguage={mockedLocales?.[0]?.id}
      />,
      <AccountDropdown
        key="account"
        labels={{ open: 'Open user menu', account: 'Account' }}
        loggedIn
        userNavigation={[
          { label: 'Your Profile', href: '#' },
          { label: 'Settings', href: '#' },
          { label: 'Sign out', href: '#', onClick: () => alert('Sign out!') }
        ]}
      />,
      <CartActionButton key="cart" quantity={1} onClick={() => alert('View cart!')} />
    ]
  }
};
