'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import type { ReactNode } from 'react';

export interface ICtaLinkProps {
  id: string;
  url: string;
  title?: string;
  children?: ReactNode | ReactNode[];
  className?: string;
  target?: string;
}

export function CtaLink({ id, url, title, children, target, className }: ICtaLinkProps) {
  return (
    <Link key={id} href={url} className={clsx(className)} target={target ?? '_self'}>
      {title || children}
    </Link>
  );
}
