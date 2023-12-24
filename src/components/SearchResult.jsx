import { useForm } from "../contexts/FormContext";

const SearchResult = ({ result, id }) => {
  const { dispatch } = useForm()

  const handleClick = function(e, id, value) {
    dispatch({type: `${id}/update`, payload: value})
  }

  return (
    <div
      className="px-5 py-2.5 hover:bg-gray-400 cursor-pointer"
      onClick={(e) => handleClick(e, id, `${result.iata + '-' + result.airport}`)}
    >
      {result.iata + '-' + result.airport}
    </div>
  );
};

export default SearchResult;