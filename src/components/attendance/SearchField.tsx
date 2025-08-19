const SearchField = () => {
  return (
    <div className="flex flex-col  gap-2">
      <label htmlFor="search" className="text-lg text-gray-300 font-semibold">
        Search
      </label>
      <input
        type="text"
        name=""
        id="search"
        placeholder="Search to find attendance detail ..."
        className="px-2 py-2 transition-all duration-300  outline-none bg-gray-700 rounded"
      />
    </div>
  );
};

export default SearchField;
