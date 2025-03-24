import type { Meta, StoryObj } from '@storybook/react';
import { RichTextBlock } from '@repo/ui/rich-text';

import { mockedRichText } from '../mocks/richtext';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Blocks/RichTextBlock',
  component: RichTextBlock,
  args: {} satisfies Meta<typeof RichTextBlock>
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: mockedRichText
  }
};
