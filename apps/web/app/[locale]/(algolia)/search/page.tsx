import SearchBlock from '@/components/search/search-block';
import { search } from '@repo/search/search';

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const initialQuery = (await searchParams)?.query || '';
  const initialResults =
    initialQuery && initialQuery.length > 0
      ? await search<{
          title: string;
        }>(initialQuery)
      : {
          results: []
        };

  return (
    <div className="lg:mx-auto lg:max-w-lg">
      <h1 className="mb-6 text-2xl font-bold">Search Page example</h1>
      <SearchBlock
        initialQuery={initialQuery}
        initialResults={
          initialResults.results?.[0]?.hits.map((el) => ({
            title: el.title,
            id: el.objectID
          })) ?? []
        }
      />
    </div>
  );
}
