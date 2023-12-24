import SearchResult from "./SearchResult";

export const SearchResults = ({ results, onClick, id }) => {
    return (
      <div className="absolute w-full bg-gray-500 flex flex-col shadow-[0px_0px_8px_#ddd] max-h-[300px] overflow-y-auto mt-4 rounded-[10px]">
        {results.map((result, i) => {
          return <SearchResult result={result} key={i} onClick={onClick} id={id}/>;
        })}
      </div>
    );
  };
export default SearchResults
