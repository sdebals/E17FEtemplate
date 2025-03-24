'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export interface ISearchActionButton {
  onClick?: () => void;
  href?: string;
  quantity?: number;
  labels?: Record<'search', string>;
}

export function SearchActionButton({
  onClick,
  href,
  labels = {
    search: 'Search'
  }
}: ISearchActionButton) {
  if (href) {
    return (
      <Link
        href={href}
        className="text-primary-700 hover:text-primary-900 flex items-center gap-x-0.5 rounded-full p-1"
      >
        <span className="sr-only">{labels.search}</span>
        <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
      </Link>
    );
  }
  return (
    <button
      className="text-primary-700 hover:text-primary-900 flex items-center gap-x-0.5 rounded-full p-1"
      onClick={() => onClick?.()}
    >
      <span className="sr-only">{labels.search}</span>
      <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
    </button>
  );
}
