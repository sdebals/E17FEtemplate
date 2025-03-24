'use client';

import Image, { type ImageProps } from 'next/image';
import { storyblockImageloader } from './image-loader';

export function SbImage({ src, alt, width, height, className, ...props }: ImageProps) {
  if (!src) {
    return;
  }

  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loader={storyblockImageloader}
      {...props}
    />
  );
}
