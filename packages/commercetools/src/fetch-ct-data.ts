// Use this for client-side data fetching from commercetools
// This calls the api route in /api/commercetools/query
// TODO: will need update later to support mutations

import type { QueryType } from './query-types';

export default async function fetchCtData<T = unknown>(
  type: QueryType,
  query?: Record<string, string>
): Promise<T> {
  let url = `/api/commercetools/query?type=${type}`;

  if (query) {
    url = url.concat('&').concat(
      Object.entries(query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    );
  }

  const response = await fetch(url);
  if (!response.ok || response.status >= 400) {
    throw response;
  }
  const json = await response.json();
  return json as T;
}
