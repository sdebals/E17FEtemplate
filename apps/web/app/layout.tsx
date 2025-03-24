import '@repo/ui/styles.css';

import type { ReactNode } from 'react';
import {
  apiPlugin,
  type SbReactComponentsMap,
  StoryblokBridgeLoader,
  storyblokInit
} from '@storyblok/react/rsc';

import { coreComponents } from '@repo/storyblok/components';
import { BlockFallback } from '@/components/storyblok/block-fallback';
import { siteComponents } from '@/components/site-components';

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN!,
  apiOptions: {
    cache: {
      clear: 'auto',
      type: 'none'
    }
  },
  use: [apiPlugin],
  components: {
    ...coreComponents,
    ...siteComponents
  } as SbReactComponentsMap,
  enableFallbackComponent: true,
  customFallbackComponent: BlockFallback
});

// Not possible to use html tag here since we need the lang attribute populated by locale layout
// More details in issue https://github.com/vercel/next.js/discussions/49415

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <StoryblokBridgeLoader options={{}} />
    </>
  );
}
