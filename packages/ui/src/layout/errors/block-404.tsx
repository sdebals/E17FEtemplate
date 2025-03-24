import type { ReactNode } from 'react';
import { CtaLink, type ICtaLinkProps } from '../../atoms/cta-link';

export interface IBlock404Props {
  title?: string;
  eyebrow?: string;
  text?: ReactNode | string;
  className?: string;
  cta1?: ICtaLinkProps;
  cta2?: ICtaLinkProps;
}

export function Block404({ title, eyebrow, text, cta1, cta2 }: IBlock404Props) {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-primary-700 text-base font-semibold">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        <div className="prose mt-6 text-base leading-7 text-gray-600">{text}</div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
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
              {cta2.title} <span aria-hidden="true">→</span>
            </CtaLink>
          )}
        </div>
      </div>
    </main>
  );
}
