const SearchResult = ({ result, onClick, id }) => {
  return (
    <div
      className="px-5 py-2.5 hover:bg-gray-400 cursor-pointer"
      onClick={() => onClick(id, `${result.iata + '-' + result.airport}`)}
    >
      {result.airport}
    </div>
  );
};

export default SearchResult;