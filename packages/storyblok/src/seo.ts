import type { ISbStory } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvedMetadata } from 'next/types';

export function generatePageMetatags(
  locale: string,
  slug: string[],
  story: ISbStory['data']['story'],
  parentData: ResolvedMetadata
) {
  // Get layout parent data
  const previousImages = [];
  if (Array.isArray(parentData?.openGraph?.images)) {
    previousImages.push([...(parentData?.openGraph?.images || [])]);
  }

  // If no content, return 404
  if (!story?.content) {
    console.error(`generatePageMetatags: No content for ${slug.join('/')} for locale ${locale}`);
    return notFound();
  }

  // Get page title to be used as fallback if title from metatags is not provided
  const pageTitle = story.content?.title;

  // Get metatags (SEO plugin for Storyblok)
  const {
    title: seoTitle,
    description: seoDescription,
    og_image: ogImage
  } = story.content.metatags || {};

  // Build og images array including parent images from layout
  const images = [];

  if (ogImage) {
    images.push({
      url: `${ogImage}/m/1200x630`,
      width: 1200,
      height: 630
    });
  }

  images.push(...previousImages);

  // Build title and description
  const title = `${seoTitle || pageTitle || parentData.title} | ${parentData.applicationName}`;
  const description = seoDescription || parentData.description;

  // Handle robots
  const robots: Metadata['robots'] = {};
  const noIndex = story.content.noIndex || false;

  if (noIndex) {
    robots.index = false;
  }

  // Return metadata
  return {
    title,
    description: description || parentData.description,
    alternates: {
      canonical: `/${locale}/${slug.join('/')}`.replace(/\/$/, '')
    },
    openGraph: {
      type: 'website',
      title,
      description: seoDescription,
      locale,
      images
    },
    robots
  };
}
