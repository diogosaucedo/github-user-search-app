const Search = () => {
  return (
    <div className="w-full h-14 bg-slate-700 rounded-lg flex items-center px-2">
      <img className="px-2" src="./icon-search.svg" alt="Icone de busca" />
      <input
        className="w-full h-11 bg-transparent outline-none"
        type="text"
        placeholder="Search for developers..."
      />
      <button className="text-slate-100 bg-blue-700 w-24 h-11 rounded-lg">
        Search
      </button>
    </div>
  );
};

export { Search };
