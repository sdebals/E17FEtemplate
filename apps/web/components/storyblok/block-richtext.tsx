import { RichText } from '@repo/storyblok/rich-text';
import type { RichTextStoryblok } from '@repo/storyblok/types';
import { RichTextBlock } from '@repo/ui/rich-text';
import { storyblokEditable } from '@storyblok/react/rsc';
import { draftMode } from 'next/headers';

export async function BlockRichText({ blok, lang }: { blok: RichTextStoryblok; lang: string }) {
  const { isEnabled: isDraftMode } = await draftMode();

  if (!blok?._uid) {
    return;
  }

  return isDraftMode ? (
    <div {...storyblokEditable(blok)}>
      <RichTextBlock>
        <RichText document={blok.text} lang={lang} />
      </RichTextBlock>
    </div>
  ) : (
    <RichTextBlock>
      <RichText document={blok.text} lang={lang} />
    </RichTextBlock>
  );
}
