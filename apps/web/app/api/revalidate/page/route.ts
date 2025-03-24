import { globalTtlCache } from '@repo/storyblok/cache';
import { getLatestCv } from '@repo/storyblok/client';
import { isValidSignature } from '@repo/storyblok/utils';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

const { STORYBLOK_SPACE_ID, STORYBLOK_REVALIDATE_SECRET } = process.env;

// Ensure the API route is only executing for expected actions
const validActions = ['published', 'unpublished'];

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const { full_slug, space_id, action } = JSON.parse(payload);
  const signature = await request.headers.get('webhook-signature');

  if (!signature || !isValidSignature(payload, signature, STORYBLOK_REVALIDATE_SECRET!)) {
    console.warn(`Invalid signature: ${signature}`);
    return Response.json({ message: 'Not found' }, { status: 404 });
  }

  let path = full_slug?.replace('homepage', '');
  path = path.startsWith('/') ? path : `/${path}`;

  console.debug(
    `Revalidate: full_slug:${full_slug} space_id:${space_id} action:${action} path:${path} `
  );

  if (!validActions.includes(action)) {
    console.warn(`Invalid action: ${action}`);
    return Response.json({}, { status: 404 });
  }

  if (!path) {
    console.warn(`Invalid or missing path: ${path}`);
    return Response.json({}, { status: 404 });
  }

  if (`${space_id}` !== `${STORYBLOK_SPACE_ID}`) {
    console.warn(`Invalid space_id: ${space_id}`);
    return Response.json({}, { status: 404 });
  }

  // Get latest CV from SB cdn/spaces/me endpoint
  const cv = await getLatestCv();
  globalTtlCache.set('cv', cv);

  // Finally revalidate the path
  revalidatePath(`${path}`);

  // Revalidate the sitemap
  revalidateTag('sitemap');

  return Response.json({
    path,
    action,
    revalidated: true
  });
}
