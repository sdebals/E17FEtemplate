import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { LanguageDropdown } from '@repo/ui/header';
import { mockedLocales } from '../mocks/locales';

const meta = {
  title: 'Layout/SecondaryNavigation/LanguageDropdown',
  component: LanguageDropdown,
  args: {} satisfies Meta<typeof LanguageDropdown>,
  decorators: [
    (Story: StoryFn) => (
      <div className="w-56">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof LanguageDropdown>;

export const Default: Story = {
  args: {
    languages: mockedLocales,
    activeLanguage: mockedLocales?.[0]?.id,
    labels: { open: 'Open language menu', language: 'English' }
  }
};
