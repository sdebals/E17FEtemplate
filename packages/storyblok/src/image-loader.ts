import type { ImageLoaderProps } from 'next/image';

type StoryblockImageloader = ImageLoaderProps & { height?: number };

export function storyblockImageloader({
  src,
  width = 0,
  height = 0,
  quality = 70
}: StoryblockImageloader) {
  return `${src}/m/${width}x${height}/filters:quality(${quality}):format(webp)`;
}

export function getImageDimensions(filename?: string | null) {
  if (filename) {
    const match = /(\d+)x(\d+)/g.exec(filename);

    if (match && match[1] && match[2]) {
      const width = parseInt(match[1], 10);
      const height = parseInt(match[2], 10);
      const ar = width / height;

      return {
        width,
        height,
        ar
      };
    }
  }

  return { width: null, height: null, ar: null };
}
