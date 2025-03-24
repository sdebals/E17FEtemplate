//middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

import siteProtectMiddleware from '@repo/site-protection/middleware';

import { routing } from './i18n/routing';

export default async function middleware(request: NextRequest) {
  // Site simple secret protection middleware
  const responseProtection = await siteProtectMiddleware(request);

  if (responseProtection) {
    return responseProtection;
  }

  // i18n middleware
  const handleI18nRouting = createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale
  });

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // The matcher cannot be a variable, next.js only accepts static strings.
  // Exclude everything that may not be a valid path.
  // Depending on your needs in the middleware you may need to adjust this and the middleware itself.
  matcher: [
    '/((?!api|_next|_vercel|_ipx|.netlify|favicon|manifest|locales|images|sitemap|robots.txt|sw.js|workbox|icons|fonts|instrumentation|.*\\..*).*)'
  ]
};
