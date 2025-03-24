import React from 'react';
import type { SbBlokData } from '@storyblok/react/rsc';

export async function BlockFallback({ blok }: { blok: SbBlokData }) {
  const { component } = blok;

  return (
    <div className="mx-auto border border-red-300 p-4 text-red-700">
      Block <span className="font-bold italic">{component}</span> not implemented!
    </div>
  );
}
