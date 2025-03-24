'use client';

import Image, { type ImageProps } from 'next/image';
import { storyblockImageloader } from '@repo/storyblok/image-loader';
import clsx from 'clsx';

//  // Uncomment and change as per your needs
//
// const shimmer = (w: number, h: number) => `
//   <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//     <defs>
//       <linearGradient id="g">
//         <stop stop-color="#e0e0e0" offset="20%" />
//         <stop stop-color="#f0f0f0" offset="50%" />
//         <stop stop-color="#e0e0e0" offset="70%" />
//       </linearGradient>
//     </defs>
//     <rect width="${w}" height="${h}" fill="#e0e0e0" />
//     <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//     <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
//   </svg>`;
// const toBase64 = (str: string) =>
//   typeof window === "undefined"
//     ? Buffer.from(str).toString("base64")
//     : window.btoa(str);
// const dataUrl =
//   `data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}` as ImageProps["placeholder"];

// We only need to generate the base64 one, to avoid extra processing result can be hardcoded
const toBase64 =
  'CiAgPHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlMGUwZTAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmMGYwZjAiIG9mZnNldD0iNTAlIiAvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlMGUwZTAiIG9mZnNldD0iNzAlIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+CiAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjZykiIC8+CiAgICA8YW5pbWF0ZSB4bGluazpocmVmPSIjciIgYXR0cmlidXRlTmFtZT0ieCIgZnJvbT0iLTYwMCIgdG89IjYwMCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiICAvPgogIDwvc3ZnPg==';
const dataUrl = `data:image/svg+xml;base64,${toBase64}` as ImageProps['placeholder'];

export function UiImage({
  src,
  alt,
  width,
  height,
  className,
  placeholder = dataUrl,
  ...props
}: ImageProps) {
  // @todo: fallback placeholder image/div
  if (!src) {
    if (width && height) {
      const w = parseInt(`${width}`, 10);
      const h = parseInt(`${height}`, 10);

      return (
        <img
          src={dataUrl}
          alt=""
          width={w}
          height={h}
          className={clsx('w-full', className)}
          style={{ width: `${w}px`, height: `${h}px` }}
        />
      );
    }
    return <img src={dataUrl} alt="" className={clsx('w-full', className)} />;
  }

  // If necessary replace the loader with your own
  const loader = (src as string).includes('a.storyblok.com') ? storyblockImageloader : undefined;

  return (
    <Image
      className={clsx(className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loader={loader}
      placeholder={placeholder}
      {...props}
    />
  );
}
