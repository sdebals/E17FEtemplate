import { routing } from '@/i18n/routing';
import { fetchStories } from '@repo/storyblok/client';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN!,
  apiOptions: {
    cache: {
      clear: 'auto',
      type: 'none'
    }
  },
  use: [apiPlugin]
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: { url: string; lastModified: string }[] = [];

  for (const locale of routing.locales) {
    const data = await fetchStories(
      {
        content_type: 'page',
        per_page: 100,
        excluding_fields: 'title,body,metatags,component,noIndex,_uid',
        language: locale
      },
      { revalidate: 0, tags: ['sitemap'] },
      true
    );

    data?.stories.forEach((story) => {
      const slug = story.slug === 'homepage' ? '' : story.slug;
      urls.push({
        url: `${SITE_URL}/${locale}/${slug}`.replace(/\/$/, ''),
        lastModified: story.published_at || story.created_at
      });
    });
  }

  return urls;
}
