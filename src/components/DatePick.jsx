import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "../contexts/FormContext";



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function DatePick({ id, placeholder}) {
  const {departureDate, arrivalDate, dispatch} = useForm()

  function handleDepatureDate(date) {
    dispatch({type: 'departureDate/update', payload: date})
  }

  function handleArrivalDate(date) {
    const depDate = new Date(departureDate);
    const arrDate = new Date(date)
    if(depDate > arrDate) {
        console.log("ERRORRRRR")
    } 
    else {
        dispatch({type: 'arrivalDate/update', payload: date})
    }
  }



  return (
    <div className="relative">
      <div className="relative z-[51] mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <CalendarDaysIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <DatePicker className=" block w-full rounded-md border-0 py-1.5 pl-10 text-gray-100 ring-2 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-transparent" selected={id === 'departureDate' ? departureDate : arrivalDate} onChange={(date) => id === "departureDate" ? handleDepatureDate(date) : handleArrivalDate(date)} placeholderText={placeholder}/>
      </div>
    </div>
  );
};

export default DatePick;