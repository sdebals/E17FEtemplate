'use server';

import { search } from '@repo/search/search';

const searchAction = async (data: FormData | string) => {
  const query = typeof data === 'string' ? data : data.get('query');
  if (!query || (query as string).length < 1 || typeof query !== 'string') {
    return;
  }
  const searchResult = await search<{title: string}>(query);
  return (
    searchResult.results[0]?.hits.map((hit) => ({
      title: hit.title,
      id: hit.objectID
    })) || []
  );
};

export default searchAction;
