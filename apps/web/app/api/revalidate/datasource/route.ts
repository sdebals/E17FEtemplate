import { globalTtlCache } from '@repo/storyblok/cache';
import { getLatestCv } from '@repo/storyblok/client';
import { isValidSignature } from '@repo/storyblok/utils';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

const { STORYBLOK_SPACE_ID, STORYBLOK_REVALIDATE_SECRET } = process.env;

// Ensure the API route is only executing for expected actions
const validActions = ['entries_updated'];
// Ensure revalidateTag is used only for expected datasources
const validDatasources = ['microcopy'];

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const { datasource_slug, space_id, action } = JSON.parse(payload);

  const signature = await request.headers.get('webhook-signature');

  if (!signature || !isValidSignature(payload, signature, STORYBLOK_REVALIDATE_SECRET!)) {
    console.warn(`Invalid signature: ${signature}`);
    return Response.json({ message: 'Not found' }, { status: 404 });
  }

  console.debug(
    `Revalidate: datasource_slug:${datasource_slug} space_id:${space_id} action:${action}`
  );

  if (!validActions.includes(action)) {
    console.warn(`Invalid action: ${action}`);
    return Response.json({}, { status: 404 });
  }

  if (!validDatasources.includes(datasource_slug)) {
    console.warn(`Invalid or missing datasource_slug: ${datasource_slug}`);
    return Response.json({}, { status: 404 });
  }

  if (`${space_id}` !== `${STORYBLOK_SPACE_ID}`) {
    console.warn(`Invalid space_id: ${space_id}`);
    return Response.json({}, { status: 404 });
  }

  // Get latest CV from SB cdn/spaces/me endpoint
  const cv = await getLatestCv();
  globalTtlCache.set('cv', cv);

  revalidateTag(`${datasource_slug}`);

  return Response.json({
    datasource_slug,
    action,
    revalidated: true
  });
}
