'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import type { Color } from '../types';

export interface IFaq {
  question: string;
  answer: string | ReactNode;
}

export interface IFaqsProps {
  title?: string;
  text?: ReactNode | string;
  faqs?: IFaq[];
  className?: string;
  backgroundColor?: Color;
}

const tvFaqs = tv({
  slots: {
    container: 'w-full',
    title: 'text-2xl font-bold leading-10 tracking-tight text-primary-900',
    text: 'mt-6 prose prose-lg [&>p]:pl-0 text-gray-900'
  },
  variants: {
    backgroundColor: {
      none: {},
      white: {},
      neutral: {
        container: 'bg-neutral-50 py-8 my-16'
      },
      gray: {
        container: 'bg-gray-100 py-8 my-16'
      },
      primary: {
        container: 'bg-primary-200 py-8 my-16'
      },
      secondary: {
        container: 'bg-secondary-200 py-8  my-16'
      },
      black: {
        container: 'bg-black py-8 text-white my-16',
        title: 'text-white!',
        text: 'text-white [&_a]:text-white!'
      },
      slate: {
        container: 'bg-slate-100 py-8 my-16'
      }
    }
  }
});

export function Faqs({ className, title, text, faqs, backgroundColor }: IFaqsProps) {
  const classes = tvFaqs({ backgroundColor });

  return (
    <div className={clsx(classes.container(), className)}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          {title && <h2 className={classes.title()}>{title}</h2>}
          {text && <div className={classes.text()}>{text}</div>}
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs?.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon aria-hidden="true" className="h-6 w-6 group-data-open:hidden" />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <div className="prose text-base leading-7 text-gray-600">{faq.answer}</div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
