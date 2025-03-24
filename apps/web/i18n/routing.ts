import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from '@/i18n/locales';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  // Default locale will not use a prefix, only the others, use always or ommit it to have a prefix in default locale
  localePrefix: 'as-needed'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
// @ts-ignore
import { LinkType, RedirectType, UsePathnameType, UseRouterType } from 'next-intl/navigation';

export const {
  Link,
  redirect,
  usePathname,
  useRouter
}: {
  Link: LinkType;
  redirect: RedirectType;
  usePathname: UsePathnameType;
  useRouter: UseRouterType;
} = createSharedPathnamesNavigation(routing);
