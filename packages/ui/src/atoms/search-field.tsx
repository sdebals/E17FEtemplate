const SearchField = ({
  search,
  onChange
}: {
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className="border-primary w-full rounded-lg border px-4 py-2"
      autoFocus
      type="search"
      placeholder="Search"
      value={search}
      onChange={onChange}
      name="query"
    />
  );
};

export default SearchField;
