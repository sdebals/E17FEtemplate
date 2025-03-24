import { tv } from 'tailwind-variants';
import clsx from 'clsx';

import { CtaLink, type ICtaLinkProps } from '../atoms/cta-link';
import { UiImage } from '../atoms/ui-image';
import type { Height } from '../types';
import type { ImageProps } from 'next/image';
import type { ReactNode } from 'react';

export interface IHeroProps {
  height?: Height;
  variant?: 'primary' | 'secondary' | 'background-image' | 'full-page';
  heading?: string;
  text?: ReactNode;
  image?: ImageProps;
  cta1?: ICtaLinkProps;
  cta2?: ICtaLinkProps;
  eyebrow?: string;
}

/**
 * @todo: Handle all variant versions in the tv configuration
 */

const tvHeroBlock = tv({
  slots: {
    container: 'w-full',
    inner: ''
  },
  variants: {
    height: {
      xs: {
        inner: 'pb-4 pt-2 sm:pb-6 lg:pb-10 lg:pt-6'
      },
      sm: {
        inner: 'pb-6 pt-2 sm:pb-8 lg:pb-14 lg:pt-12'
      },
      md: {
        inner: 'pb-12 pt-5 sm:pb-16 lg:pb-28 lg:pt-24'
      },
      lg: {
        inner: 'pb-24 pt-10 sm:pb-32 lg:pb-56 lg:pt-48'
      },
      xl: {
        inner: 'pb-24 pt-10 sm:pb-32 lg:pb-56 lg:pt-48'
      },
      'h-full': {
        inner: 'h-screen'
      }
    },
    variant: {
      primary: {},
      secondary: {},
      'background-image': {
        inner: 'bg-cover bg-center'
      },
      'full-page': {
        inner: 'bg-cover bg-center'
      }
    }
  }
});

export async function Hero({
  heading,
  text,
  image,
  cta1,
  cta2,
  eyebrow,
  height,
  variant
}: IHeroProps) {
  const classes = tvHeroBlock({ height, variant });

  return (
    <div className="relative bg-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className={clsx('px-6 lg:col-span-7 lg:px-0 xl:col-span-6', classes.inner())}>
          <div className="mx-auto max-w-2xl lg:mx-0">
            {eyebrow && (
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {eyebrow}
                </div>
              </div>
            )}
            <h1 className="text-primary-900 text-4xl font-bold tracking-tight sm:mt-10 sm:text-6xl lg:mt-24">
              {heading}
            </h1>
            <div className="prose prose-lg mt-6 [&>p]:pl-0">{text}</div>
            <div className="mt-10 flex items-center gap-x-6">
              {cta1?.title && (
                <CtaLink
                  {...cta1}
                  className="bg-primary-700 hover:bg-primary-700 focus-visible:outline-primary-700 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-2xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {cta1.title}
                </CtaLink>
              )}
              {cta2?.title && (
                <CtaLink {...cta2} className="text-sm font-semibold leading-6 text-gray-900">
                  {cta2.title} <span aria-hidden="true">→</span>
                </CtaLink>
              )}
            </div>
          </div>
        </div>
        <div className="relative h-48 lg:col-span-5 lg:-mr-8 lg:h-auto xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          {image?.src && (
            <UiImage
              className="aspect-16/9 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              {...image}
              fill
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
