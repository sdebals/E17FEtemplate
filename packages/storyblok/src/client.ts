import 'server-only';

import { draftMode } from 'next/headers';
import {
  type ISbStories,
  type ISbStoriesParams,
  type ISbStory,
  getStoryblokApi
} from '@storyblok/react/rsc';
import StoryblokClient from 'storyblok-js-client';
import { cache } from 'react';
import axios from 'axios';
import { globalTtlCache } from './cache';
import { assign } from './utils';

export async function fetchMicrocopy(datasource = 'microcopy', dimension = '') {
  const params: ISbStoriesParams = {
    cv: await getLatestCv(),
    datasource,
    dimension,
    per_page: 500
  };

  // This may be called before initialize in the layout therefore using the js client.
  const storyblokApi = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN!,
    cache: {
      clear: 'auto',
      type: 'none'
    }
  });

  // @ts-ignore - Type issues?
  const result = await storyblokApi.get(`cdn/datasource_entries`, params, {
    next: {
      tags: ['microcopy'],
      // to force revalidation ensure you have a webhook listening to datasource changes and revalidating by tag "microcopy"
      revalidate: false
    }
  });

  const records = (result.data as any)?.datasource_entries?.map((item: any) => ({
    [item.name]: item.dimension_value || item.value
  }));

  // Transform the items array in a nested object that can be easily consumed by next-intl
  const microcopy = records.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc: any, obj: any) => {
      const key = Object.keys(obj);
      const value = Object.values(obj);
      if (key.length > 0 && value.length > 0 && typeof key[0] === 'string') {
        assign(acc, key[0].split('.'), value[0]);
      }
      return acc;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as { [key: string]: any }
  );

  return microcopy;
}

interface INextParams {
  revalidate?: number | false;
  tags?: string[];
}

// Fetch defaults, they can and should be overriden on each call
const fetchDefaults: Partial<ISbStoriesParams> = {
  language: 'en',
  resolve_links: 'url',
  resolve_level: 3
};

/**
 * Storyblok API needs a cv parameter (version) to retrieve latest contents.
 * As per API recommendations we should use the cdn/spaces/me endpoint (its more performant) to get the latest version
 * If we use native fetch() it will use next.js revalidate behavior, and since we need a short revalidation that will impact the page revalidation time.
 */
export const getLatestCv = cache(async () => {
  const res = await axios
    .get(
      `https://api.storyblok.com/v2/cdn/spaces/me/?token=${process.env.STORYBLOK_ACCESS_TOKEN}`,
      { timeout: 5000 }
    )
    .catch((err) => console.error(`[SB]: failed to fetch cv`, err.message));

  return res?.data?.space.version;
});

/**
 * We use a cache memory store to persist the value (e.g. for 1 minute).
 */
async function cachedLatestCv() {
  let cv = globalTtlCache.get('cv');

  if (!cv) {
    cv = (await getLatestCv()) || Date.now();
    globalTtlCache.set('cv', cv);
  }

  return cv as number;
}

export async function fetchStories(
  fetchParams = {} as ISbStoriesParams,
  nextParams = {} as INextParams,
  ignoreDraftMode = false // we can't access draft mode if calling from generateStaticParams()
): Promise<ISbStories['data'] | undefined> {
  let isDraftMode = false;

  if (!ignoreDraftMode) {
    const { isEnabled } = await draftMode();
    isDraftMode = isEnabled;
  }

  const cv = isDraftMode ? Date.now() : await cachedLatestCv();

  const sbParams: ISbStoriesParams = {
    version: isDraftMode || process.env.NODE_ENV !== 'production' ? 'draft' : 'published',
    cv,
    ...fetchDefaults,
    ...fetchParams
  };

  const storyblokApi = getStoryblokApi();

  if (isDraftMode) {
    nextParams.revalidate = 0;
  }

  try {
    const result = await storyblokApi.getStories(sbParams, {
      // @ts-ignore - ignore
      next: nextParams
    });

    // Every new request returns an updated cv, so if the result is newer we can update the cache
    if (result?.data.cv > cv) {
      globalTtlCache.set('cv', result.data.cv);
    }

    return result.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(`[SB]: Error fetching stories - ${err.status} ${err.message}`);
  }
}

export async function fetchStory(
  storyPath: string,
  fetchParams = {} as ISbStoriesParams,
  nextParams = {} as INextParams
): Promise<ISbStory['data'] | undefined> {
  const { isEnabled: isDraftMode } = await draftMode();

  const cv = isDraftMode ? Date.now() : await cachedLatestCv();

  const sbParams: ISbStoriesParams = {
    version: isDraftMode || process.env.NODE_ENV !== 'production' ? 'draft' : 'published',
    cv,
    ...fetchDefaults,
    ...fetchParams
  };

  const storyblokApi = getStoryblokApi();

  if (isDraftMode) {
    nextParams.revalidate = 0;
  }

  try {
    const result = await storyblokApi.getStory(storyPath, sbParams, {
      // @ts-ignore - ignore
      next: nextParams
    });

    // Every new request returns an updated cv, so if the result is newer we can update the cache
    if (result?.data.cv > cv) {
      globalTtlCache.set('cv', result.data.cv);
    }

    return result.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(
      `[SB]: Error fetching ${storyPath} - ${err.status} ${err.message} - `,
      fetchParams
    );
  }
}
