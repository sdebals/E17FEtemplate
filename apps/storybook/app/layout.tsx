import './globals.css';
import '@repo/ui/styles.css';

import { ReactNode } from 'react';

import { sans, mono } from '@repo/ui/fonts';
export default function StorybookLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className={`font-sans ${sans.variable} ${mono.variable}`}>{children}</div>;
}
