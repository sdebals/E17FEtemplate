import { Hero, type IHeroProps } from '@repo/ui/hero';
import { RichText } from '@repo/storyblok/rich-text';
import { mapCta, mapStoryblokImage } from '@repo/storyblok/utils';
import type { HeroStoryblok } from '@repo/storyblok/types';
import { storyblokEditable } from '@storyblok/react/rsc';
import React from 'react';
import { draftMode } from 'next/headers';

export async function BlockHero({ blok, lang }: { blok: HeroStoryblok; lang: string }) {
  const { isEnabled: isDraftMode } = await draftMode();

  if (!blok?._uid) {
    return;
  }

  const heroProps: IHeroProps = {
    heading: blok.heading,
    eyebrow: blok.eyebrow,
    height: blok.height as IHeroProps['height'], // storyblok types generator doesn't handle types when value comes from a datasource
    image: mapStoryblokImage(blok.image),
    cta1: blok.cta1 && mapCta(blok.cta1),
    cta2: blok.cta2 && mapCta(blok.cta2),
    text: <RichText document={blok.text} lang={lang} />
  };

  return isDraftMode ? (
    <div {...storyblokEditable(blok)}>
      <Hero {...heroProps} />
    </div>
  ) : (
    <Hero {...heroProps} />
  );
}
