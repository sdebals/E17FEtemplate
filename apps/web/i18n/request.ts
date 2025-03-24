import { getRequestConfig } from 'next-intl/server';
import { fetchMicrocopy } from '@repo/storyblok/client';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const requestConfig: any = getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    console.error(`Invalid locale: ${locale}`);
    notFound();
  }

  const messages = await fetchMicrocopy('microcopy', locale);

  return {
    locale,
    messages
  };
});

export default requestConfig;
