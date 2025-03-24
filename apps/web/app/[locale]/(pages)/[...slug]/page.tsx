import { StoryblokComponent } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';
import type { ResolvingMetadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import { fetchStories, fetchStory } from '@repo/storyblok/client';
import { generatePageMetatags } from '@repo/storyblok/seo';
import { validateSlug } from '@repo/site-protection/validations';
import { routing } from '@/i18n/routing';

// Content page, inspirational content - use ondemand revalidation
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = process.env.NODE_ENV === 'production' ? false : 0;

// A page shoult not take more than 5 seconds to load
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#maxduration
export const maxDuration = 5;

// Ideally this should not be required, but with next-intl and if not using generateStaticParams it seems next.js flags it always as dynamic
// export const dynamic = 'force-static';

/**
 * This may be optional and depends on the number of pages we may have and need to enforce static generation.
 * For a small number of pages we can have the benefit of having the pages already generated during build.
 * For a large number of pages probably it's better to generate them on demand.
 */
export async function generateStaticParams() {
  const staticPaths: { locale: string }[] = [];

  for (const locale of routing.locales) {
    const data = await fetchStories(
      {
        content_type: 'page',
        per_page: 100,
        excluding_fields: 'title,body,metatags,component,noIndex,_uid',
        language: locale
      },
      { revalidate: 0 },
      true
    );

    const localePaths =
      data?.stories.map((story) => ({ slug: story.slug.split('/'), locale })) || [];

    staticPaths.push(...localePaths);
  }

  return staticPaths;
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string[] }> },
  parent: ResolvingMetadata
) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;

  unstable_setRequestLocale(locale);

  if (!validateSlug(slug)) {
    return {};
  }

  // Get layout parent data
  const parentData = await parent;

  // Fetch the page data
  const data = await fetchStory(slug.join('/'), { language: locale }, { tags: ['pages'] });

  if (!data?.story) {
    return {};
  }

  return generatePageMetatags(locale, slug, data?.story, parentData);
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;

  unstable_setRequestLocale(locale);

  // We can't do it in the middleware since it can still pass the middleware matcher
  if (!validateSlug(slug)) {
    notFound();
  }

  // In most cases resolve relations can be empty and fetched at component level if needed
  const bridgeOptions = { resolveRelations: [] };

  // This request is memoized by Next.js as it's already called in generateMetadata
  const data = await fetchStory(slug.join('/'), { language: locale }, { tags: ['pages'] });

  if (!data?.story) {
    notFound();
  }

  return (
    <StoryblokComponent blok={data.story.content} bridgeOptions={bridgeOptions} lang={locale} />
  );
}
