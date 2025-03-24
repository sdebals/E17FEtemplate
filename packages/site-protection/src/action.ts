'use server';

import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';
import { getCookieName, simpleHash } from './utils';

const { SITE_PROTECTION_SECRET } = process.env;

export async function actionSubmitSecret(_prevFormState: { status: string }, data: FormData) {
  const cookieName = getCookieName();
  const siteSecret = simpleHash(SITE_PROTECTION_SECRET!);
  const secret = data?.get('secret')?.toString() || '';
  const currpath = data?.get('currpath')?.toString();

  if (simpleHash(secret) !== siteSecret) {
    return {
      status: 'error'
    };
  }

  const cookieStore = await cookies();
  const expires = new Date();

  expires.setDate(expires.getDate() + 30); // 30 days

  cookieStore.set(cookieName, siteSecret, {
    httpOnly: true,
    secure: true,
    expires
  });

  redirect(currpath || '/', RedirectType.push);
}
