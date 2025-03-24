import type { ResolvingMetadata } from 'next';
import { StoryblokComponent } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';

import { fetchStory } from '@repo/storyblok/client';
import { generatePageMetatags } from '@repo/storyblok/seo';
import { unstable_setRequestLocale } from 'next-intl/server';

// Homepage, inspirational content - use ondemand revalidation
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = process.env.NODE_ENV === 'production' ? false : 0;

// A page shoult not take more than 5 seconds to load
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#maxduration
export const maxDuration = 5;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
  parent: ResolvingMetadata
) {
  const locale = (await params).locale;
  unstable_setRequestLocale(locale);

  // Get layout parent data
  const parentData = await parent;

  // Fetch the homepage data
  const data = await fetchStory('homepage', { language: locale }, { revalidate, tags: ['pages'] });

  if (!data?.story) {
    return {};
  }

  return generatePageMetatags(locale, [''], data?.story, parentData);
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params)?.locale;
  unstable_setRequestLocale(locale);

  // In most cases resolve relations can be empty and fetched at component level if needed
  const bridgeOptions = { resolveRelations: [] };

  // This request is memoized by Next.js as it's already called in generateMetadata
  const data = await fetchStory('homepage', { language: locale }, { revalidate, tags: ['pages'] });

  if (!data?.story) {
    return notFound();
  }

  return (
    <StoryblokComponent blok={data.story.content} bridgeOptions={bridgeOptions} lang={locale} />
  );
}
