import { useEffect, useState } from "react";

interface IProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchField: React.FC<IProps> = ({ search, setSearch }) => {
  const [tempSearch, setTempSearch] = useState(search);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      setSearch(tempSearch);
    }, 500);

    return () => {
      clearTimeout(searchTimeout);
    };
  }, [tempSearch]);

  return (
    <div className="flex flex-col gap-2 w-full sm:w-96">
      <label
        htmlFor="search"
        className="text-base sm:text-lg text-gray-300 font-semibold"
      >
        Search
      </label>
      <input
        value={tempSearch}
        type="text"
        id="search"
        onChange={(e) => setTempSearch(e.target.value)}
        placeholder="Search to find attendance detail ..."
        className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base transition-all duration-300 outline-none bg-gray-700 rounded focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchField;
