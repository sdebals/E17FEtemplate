import { NextRequest, NextResponse } from 'next/server';
import { getCookieName, simpleHash } from './utils';

const { SITE_PROTECTION_SECRET } = process.env;

export default async function middleware(request: NextRequest) {
  if (SITE_PROTECTION_SECRET) {
    const cookieName = getCookieName();
    const siteSecret = simpleHash(SITE_PROTECTION_SECRET);
    const cookieSecret = request.cookies.get(cookieName)?.value;

    if (cookieSecret !== siteSecret && request.nextUrl.pathname !== '/site-protection') {
      return NextResponse.rewrite(new URL('/site-protection', request.url));
    }

    if (cookieSecret !== siteSecret && request.nextUrl.pathname === '/site-protection') {
      return NextResponse.next();
    }
  }

  // Hide basic auth page through 404 if no secret is defined and user tries to access it
  if (request.nextUrl.pathname === '/site-protection') {
    console.warn('Direct access to /site-protection');
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }
}
