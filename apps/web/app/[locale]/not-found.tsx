import { getLocale, unstable_setRequestLocale } from 'next-intl/server';

import { fetchStory } from '@repo/storyblok/client';
import { RichText } from '@repo/storyblok/rich-text';
import type { SettingsStoryblok } from '@repo/storyblok/types';
import { mapCta } from '@repo/storyblok/utils';
import { Block404, type IBlock404Props } from '@repo/ui/block-404';

export default async function NotFound() {
  const locale = await getLocale();

  unstable_setRequestLocale(locale);

  const siteSettingsStory = await fetchStory(
    'settings',
    {
      language: locale,
      resolve_relations: ['settings.notFoundLinks']
    },
    { revalidate: false, tags: ['settings', '404'] }
  );

  const siteSettings = siteSettingsStory?.story?.content as SettingsStoryblok;

  if (!siteSettingsStory?.story) {
    console.error(`404 page - can't retrieve settings story for ${locale}`);
  }

  const blockProps: IBlock404Props = {
    eyebrow: siteSettings.notFoundEyebrow || '404',
    title: siteSettings.notFoundTitle || 'Page not found',
    text: <RichText document={siteSettings.notFoundText} lang={locale} />,
    cta1: siteSettings.cta1 && mapCta(siteSettings.cta1),
    cta2: siteSettings.cta2 && mapCta(siteSettings.cta2)
  };

  return <Block404 {...blockProps} />;
}
