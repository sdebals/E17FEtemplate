import clsx from 'clsx';
import type { ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { CtaLink, type ICtaLinkProps } from '../atoms/cta-link';
import type { ImageProps } from 'next/image';
import { UiImage } from '../atoms/ui-image';

export interface ISplitLogosProps {
  title?: string;
  text?: ReactNode | string;
  className?: string;
  cta1?: ICtaLinkProps;
  cta2?: ICtaLinkProps;
  logos?: ImageProps[];
}

const tvSplitLogos = tv({
  slots: {
    container: 'bg-white py-24 sm:py-32'
  }
});

export async function SplitLogos({ title, text, cta1, cta2, logos, className }: ISplitLogosProps) {
  const classes = tvSplitLogos();

  return (
    <div className={clsx(classes.container(), className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            {title && (
              <h2 className="text-primary-900 text-3xl font-bold tracking-tight">{title}</h2>
            )}
            {text && <div className="mt-6 text-lg leading-8 text-gray-600">{text}</div>}
            <div className="mt-8 flex items-center gap-x-6">
              {cta1?.title && (
                <CtaLink
                  {...cta1}
                  className="bg-primary-700 hover:bg-primary-500 focus-visible:outline-primary-700 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-2xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {cta1.title}
                </CtaLink>
              )}
              {cta2?.title && (
                <CtaLink {...cta2} className="text-sm font-semibold text-gray-900">
                  {cta2.title} <span aria-hidden="true">&rarr;</span>
                </CtaLink>
              )}
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {logos?.map(({ src, alt }, idx) => (
              <UiImage
                key={`logo-${idx}`}
                src={src}
                alt={alt || ''}
                width={105}
                height={48}
                className="max-h-12 w-full object-contain object-left"
                unoptimized
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
