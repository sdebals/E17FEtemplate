'use server';

import { cookies } from 'next/headers';

// Very simple server action to dismiss the banner.
// It's invoked from the client when the user clicks on the banner's dismiss button.

export default async function actionDismissBanner({ cookieName }: { cookieName: string }) {
  const cookieStore = await cookies();

  cookieStore.set(cookieName, 'true');
}
