'use client';

let timerId: NodeJS.Timeout | undefined = undefined;
const timeout = 200;

import searchAction from '@/lib/search/actions';
import { useRouter } from 'next/navigation';
import SearchField from '@repo/ui/search-field';
import { useState, useTransition } from 'react';

const SearchBlock = ({
  initialQuery,
  initialResults
}: {
  initialQuery: string;
  initialResults: { title: string; id: string }[];
}) => {
  const [search, setSearch] = useState(initialQuery ?? '');
  const [, startTransition] = useTransition();
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<
    | {
        title: string;
        id: string;
      }[]
    | undefined
  >(initialResults ?? []);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(async () => {
      const res = await searchAction(e.target.value);
      setSearchResults(res);
    }, timeout);
  };

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('query', e.target.value);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    router.push(newUrl);

    startTransition(() => {
      handleChange(e);
    });
  };

  return (
    <>
      <search>
        {/* @ts-expect-error not sure how to fix this atm */}
        <form className="w-full" action={searchAction}>
          <input type="submit" hidden />
          <SearchField search={search} onChange={onChange} />
        </form>
      </search>
      <ul className="mt-2">
        {searchResults?.map((result) => (
          <li className="border-b border-gray-300 py-2" key={result.id}>
            {result.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchBlock;
