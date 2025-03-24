import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';

import { sans, mono } from '@repo/ui/fonts';
import { fetchStory } from '@repo/storyblok/client';
import type { SettingsStoryblok } from '@repo/storyblok/types';

import { Header, Footer } from '@/components/layout';
import { DraftModeIndicator } from '@/components/draft-mode';
import { routing } from '@/i18n/routing';
import { Toaster } from 'sonner';

// Homepage, inspirational content - use ondemand revalidation
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = process.env.NODE_ENV === 'production' ? false : 0;

// We need this in order to have static pages along with unstable_setRequestLocale
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  unstable_setRequestLocale(locale);

  // Get sitesettings
  const siteSettingsStory = await fetchStory(
    '/settings',
    {
      language: locale,
      resolve_relations: [
        'settings.headerLinks',
        'settings.footerLinks',
        'settings.footerSocialLinks'
      ]
    },
    { revalidate, tags: ['settings'] }
  );

  if (!siteSettingsStory?.story?.content) {
    console.error(`generateMetadata(): could not fetch site settings for locale ${locale}`);
    return {};
  }

  const siteSettings = siteSettingsStory?.story.content as SettingsStoryblok;

  const { siteName } = siteSettings;

  // Get metatags (SEO plugin for Storyblok)
  const { title, description, og_image: ogImage } = siteSettings.metatags || {};

  const images = [];

  if (ogImage) {
    images.push({
      url: `${ogImage}/m/1200x630`,
      width: 1200,
      height: 630
    });
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ''),
    title,
    description,
    applicationName: siteName,
    openGraph: {
      title,
      description,
      siteName: siteName,
      images
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  unstable_setRequestLocale(locale);

  const { isEnabled: isDraftMode } = await draftMode();

  // Get i18n messages
  const messages = await getMessages({ locale });

  // Get sitesettings
  const siteSettings = await fetchStory(
    '/settings',
    {
      language: locale,
      resolve_relations: [
        'settings.headerLinks',
        'settings.footerLinks',
        'settings.footerSocialLinks'
      ]
    },
    { revalidate, tags: ['settings'] }
  );

  if (!siteSettings?.story) {
    console.error(`LocaleLayout: Could not fetch site settings for locale ${locale}`);
    return notFound();
  }

  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} siteSettings={siteSettings} />
          <main>{children}</main>
          <Footer siteSettings={siteSettings} />
          {isDraftMode && <DraftModeIndicator />}
        </NextIntlClientProvider>
        <Toaster />
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
