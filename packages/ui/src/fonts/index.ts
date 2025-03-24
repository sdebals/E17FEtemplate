// Replace with your fonts

import { Sora, Roboto_Mono } from 'next/font/google';

export const sans = Sora({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

export const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});
