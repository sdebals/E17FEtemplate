import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;

const isProduction = APP_ENV?.toLowerCase() === 'prod';

// Place all well-known disallowed paths here
const disallow = ['/api'];

export const dynamic = 'force-dynamic';

export default function robots(): MetadataRoute.Robots {
  return isProduction
    ? {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow
        },
        sitemap: `${SITE_URL}/sitemap.xml`
      }
    : {
        rules: {
          userAgent: '*',
          disallow: '/'
        }
      };
}
