import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') ?? '';

  (await draftMode()).disable();

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

  redirect(`/${slug}?${searchParams.toString()}`);
}
