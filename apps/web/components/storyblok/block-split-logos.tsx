import { RichText } from '@repo/storyblok/rich-text';
import { mapCta, mapStoryblokImage } from '@repo/storyblok/utils';
import type { HeroStoryblok } from '@repo/storyblok/types';
import { type ISplitLogosProps, SplitLogos } from '@repo/ui/split-logos';
import { draftMode } from 'next/headers';
import { storyblokEditable } from '@storyblok/react/rsc';

export async function BlockSplitLogos({ blok, lang }: { blok: HeroStoryblok; lang: string }) {
  if (!blok?._uid) {
    return;
  }

  const { isEnabled: isDraftMode } = await draftMode();

  const props: ISplitLogosProps = {
    title: blok.title,
    text: <RichText document={blok.text} lang={lang} />,
    cta1: blok.cta1 && mapCta(blok.cta1),
    cta2: blok.cta2 && mapCta(blok.cta2),
    logos: blok.logos?.map(mapStoryblokImage)
  };

  return isDraftMode ? (
    <div {...storyblokEditable(blok)}>
      <SplitLogos {...props} />
    </div>
  ) : (
    <SplitLogos {...props} />
  );
}
