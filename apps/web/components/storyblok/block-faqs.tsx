import { fetchStories } from '@repo/storyblok/client';
import { RichText } from '@repo/storyblok/rich-text';
import type { FaqsStoryblok } from '@repo/storyblok/types';
import { Faqs, type IFaqsProps } from '@repo/ui/faqs';
import { type ISbStories, storyblokEditable } from '@storyblok/react/rsc';
import { Skeleton } from '@repo/ui/skeleton';
import { Suspense } from 'react';
import { draftMode } from 'next/headers';

async function BlockFaqsSuspended({ blok, lang }: { blok: FaqsStoryblok; lang: string }) {
  if (!blok?._uid || !blok?.faqItems) {
    return;
  }

  const faqItems = (await fetchStories({
    by_uuids: blok?.faqItems?.join(','),
    language: lang
  })) as ISbStories['data'];

  const faqsProps: IFaqsProps = {
    title: blok.title,
    text: <RichText document={blok.intro} lang={lang} />,
    backgroundColor: blok.backgroundColor as IFaqsProps['backgroundColor'],
    faqs: faqItems?.stories?.map(({ id, content }) => ({
      id,
      question: content?.question,
      answer: <RichText document={content?.answer} lang={lang} />
    }))
  };

  return <Faqs {...faqsProps} />;
}

export async function BlockFaqs(props: { blok: FaqsStoryblok; lang: string }) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <Suspense
      fallback={<Skeleton className="mx-auto w-full max-w-xl py-24 sm:py-32 lg:px-8 lg:py-40" />}
    >
      {isDraftMode ? (
        <div {...storyblokEditable(props.blok)}>
          <BlockFaqsSuspended {...props} />
        </div>
      ) : (
        <BlockFaqsSuspended {...props} />
      )}
    </Suspense>
  );
}
