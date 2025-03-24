'use client';

import type { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

export interface IbannerProps {
  text: string | ReactNode;
  onClose?: () => void;
  labels: Record<'dismiss', string>;
}

export function Banner({ text, labels = { dismiss: 'Dismiss' }, onClose }: IbannerProps) {
  return (
    <div className="bg-primary-700 flex items-center gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="text-sm leading-6 text-white [&_a]:underline">{text}</div>
      <div className="flex flex-1 justify-end">
        {typeof onClose !== 'undefined' ? (
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            onClick={onClose}
          >
            <span className="sr-only">{labels.dismiss}</span>
            <XMarkIcon aria-hidden="true" className="h-5 w-5 text-white" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
