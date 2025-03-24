import { algoliasearch, type SearchResponse } from 'algoliasearch';

const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP_ID || '',
  process.env.ALGOLIA_SEARCH_API_KEY || ''
);

export const search = async <T>(
  query: string,
  page?: number
): Promise<{ results: SearchResponse<T>[] }> => {
  // ...
  return await algoliaClient.searchForHits<T>({
    requests: [
      {
        query,
        page,
        indexName: process.env.ALGOLIA_SEARCH_INDEX || ''
      }
    ]
  });
};
