import { RichText } from '@repo/storyblok/rich-text';
import type { MediaStoryblok } from '@repo/storyblok/types';
import { mapStoryblokImage } from '@repo/storyblok/utils';
import { MediaBlock, type IMediaBlockProps } from '@repo/ui/media-block';
import type { Color, Height, Width } from '@repo/ui/types';
import { storyblokEditable } from '@storyblok/react/rsc';
import { draftMode } from 'next/headers';

export async function BlockMedia({ blok, lang }: { blok: MediaStoryblok; lang: string }) {
  if (!blok?._uid) {
    return;
  }

  const { isEnabled: isDraftMode } = await draftMode();

  const mediaProps: IMediaBlockProps = {
    title: blok.title,
    text: <RichText document={blok.text} lang={lang} />,
    image: mapStoryblokImage(blok.image),
    caption: blok.caption,
    backgroundColor: blok.backgroundColor as Color,
    width: blok.width as Width,
    height: blok.height as Height
  };

  return isDraftMode ? (
    <div {...storyblokEditable(blok)}>
      <MediaBlock {...mediaProps} />
    </div>
  ) : (
    <MediaBlock {...mediaProps} />
  );
}
