import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

const DRAFT_MODE_SECRET = process.env.STORYBLOK_DRAFT_SECRET;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (secret !== DRAFT_MODE_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  (await draftMode()).enable();

  // Override cookie header for draft mode for usage in live-preview
  // https://github.com/vercel/next.js/issues/49927
  const cookieStore = cookies();
  const cookie = (await cookieStore).get('__prerender_bypass')!;
  (await cookies()).set({
    name: '__prerender_bypass',
    value: cookie?.value,
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none'
  });

  searchParams.delete('secret');
  searchParams.delete('slug');

  let path = slug?.startsWith('/') ? slug : `/${slug || ''}`;

  if (path.startsWith('/homepage')) {
    path = '/';
  }

  redirect(`${path}?${searchParams.toString()}`);
}
