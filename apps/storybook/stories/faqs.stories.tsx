import { Meta, StoryObj } from '@storybook/react';

import { Faqs } from '@repo/ui/faqs';
import { mockedFaqs } from '../mocks/faqs';

const meta = {
  title: 'Blocks/Faqs',
  component: Faqs,
  args: {} satisfies Meta<typeof Faqs>
};

export default meta;

type Story = StoryObj<typeof Faqs>;

export const Default: Story = {
  args: {
    title: 'Frequently asked questions',
    text: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
        labore et dolore magna aliqua. Plura mihi bona sunt, inclinet, amari petere vellent.
      </p>
    ),
    faqs: mockedFaqs
  }
};
