import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import { UiImage } from '../atoms/ui-image';
import type { Color, Height, Width } from '../types';
import type { ReactNode } from 'react';
import type { ImageProps } from 'next/image';

export interface IMediaBlockProps {
  title?: string;
  text?: ReactNode;
  caption?: string;
  image?: ImageProps;
  width?: Width;
  height?: Height;
  videoUrl?: string;
  className?: string;
  backgroundColor?: Color;
}

const tvMediaBlock = tv({
  slots: {
    container: 'w-full px-4 sm:px-0 text-gray-900',
    base: 'mx-auto my-8 sm:my-12 w-full media-block',
    title: 'text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-primary-900',
    text: 'prose prose-lg mt-4 text-gray-700',
    figure: 'flex flex-col gap-y-1 my-0 w-full relative',
    imageWrapper: 'relative inset-0',
    image: 'ring-1 ring-white/10 aspect-video w-full object-cover',
    caption: 'w-full mt-1 text-sm leading-6 text-gray-500',
    icon: 'h-5 w-5 flex-none'
  },
  variants: {
    width: {
      xs: {
        base: 'max-w-2xl'
      },
      sm: {
        base: 'max-w-3xl'
      },
      md: {
        base: 'max-w-5xl'
      },
      lg: {
        base: 'max-w-6xl'
      },
      xl: {
        base: 'max-w-7xl'
      },
      'w-full': {
        container: 'mx-[calc(50%-50vw)] w-screen relative overflow-hidden',
        title: 'mx-auto max-w-3xl px-8',
        base: '',
        imageWrapper: 'relative',
        image: 'ring-1 ring-white/10 aspect-video w-full object-cover',
        caption: 'mt-8 ml-10 text-sm leading-6 text-gray-500',
        text: 'max-w-5xl px-8'
      }
    },
    height: {
      xs: {
        imageWrapper: 'min-h-[350px]'
      },
      sm: {
        imageWrapper: 'min-h-[450px]'
      },
      md: {
        imageWrapper: 'min-h-[550px]'
      },
      lg: {
        imageWrapper: 'min-h-[650px]'
      },
      xl: {
        imageWrapper: 'min-h-[750px]'
      },
      'h-full': {
        imageWrapper: 'min-h-screen',
        image: 'ring-1 ring-white/10 aspect-video w-full object-cover min-h-screen',
        caption: 'py-2 px-4 text-sm z-10 leading-6 text-gray-500'
      }
    },
    backgroundColor: {
      none: {},
      white: {},
      neutral: {
        container: 'bg-neutral-50 py-8 my-16'
      },
      gray: {
        container: 'bg-gray-50 py-8 my-16'
      },
      primary: {
        container: 'bg-primary-50 py-8 my-16'
      },
      secondary: {
        container: 'bg-secondary-50 py-8 my-16'
      },
      black: {
        container: 'bg-black py-8 text-white my-16',
        title: 'text-white!',
        caption: 'text-gray-300!',
        text: 'text-white [&_a]:text-white!'
      },
      slate: {
        container: 'bg-slate-100 py-8 text-white my-16'
      }
    }
  }
});

export async function MediaBlock({
  title,
  text,
  image,
  caption,
  className,
  width = 'md',
  height = 'md',
  backgroundColor = 'none'
}: IMediaBlockProps) {
  const classes = tvMediaBlock({ width, height, backgroundColor });

  return (
    <div className="mx-auto w-full overflow-hidden">
      <div className={clsx(classes.container(), className)}>
        <div className={classes.base()}>
          <h2 className={classes.title()}>{title}</h2>
          <div className="mx-auto">
            {image?.src && (
              <figure className={classes.figure()}>
                <div className={classes.imageWrapper()}>
                  <UiImage className={classes.image()} src={image.src} alt={image.alt || ''} fill />
                </div>
                {caption && <figcaption className={classes.caption()}>{caption}</figcaption>}
              </figure>
            )}
          </div>
          <div className="mx-auto w-full max-w-5xl">
            <div className={classes.text()}>{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
