import { StoryObj } from '@storybook/react';

import { mapStoryblokImage } from '@repo/storyblok/utils';
import { UiImage } from '@repo/ui/ui-image';

import { mockImageSb, mockImageUnsplash } from '../mocks/images';

const meta = {
  title: 'Foundations/UiImage',
  component: UiImage,
  args: {}
};

export default meta;

type Story = StoryObj<typeof UiImage>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sbImage = mapStoryblokImage(mockImageSb as any);

export const Storyblok: Story = {
  args: {
    ...sbImage,
    width: '720',
    height: '480'
  }
};

export const StoryblokFluid: Story = {
  args: {
    ...sbImage,
    width: undefined,
    height: undefined,
    fill: true,
    className: 'object-cover',
    sizes: '100vw'
  }
};

export const WithoutPlaceholder: Story = {
  args: {
    ...sbImage,
    width: '720',
    height: '480',
    placeholder: 'empty'
  }
};

export const UnoptimizedRemoteImage: Story = {
  args: {
    ...mockImageUnsplash,
    width: '720',
    height: '480',
    unoptimized: true
  }
};

export const Fallback: Story = {
  args: {
    src: undefined,
    width: '720',
    height: '480'
  }
};
