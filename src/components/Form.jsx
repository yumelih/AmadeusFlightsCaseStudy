import DatePick from "./DatePick"
import Dropdown from "./Dropdown"
import Input from "./Input"
import { useForm } from "../contexts/FormContext"
import toast from "react-hot-toast";



function Form() {
    const {currentTripOption, departureDate, arrivalDate, dispatch} = useForm()

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: 'formSubmit/update', payload: true})
        if(!departureDate) toast.error('Please fill departure date');
        if(!arrivalDate && currentTripOption === 'Round trip') toast.error('Please fill arrival date');
    
    }

    return (
        <div className="sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-6 px-2 py-3 bg-gray-700 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <form className="flex flex-col gap-2 items-start relative" onSubmit={handleSubmit}>
            <Dropdown /> 
            <div className="flex gap-4">
                <div className="flex gap-1">
                    <Input key='departureAirport' id="departureAirport"  placeholder="Where from?" />
                    <Input key="arrivalAirport" id="arrivalAirport" placeholder="Where to?"/>
                </div>
                <div className="flex gap-1">
                    <DatePick id="departureDate" placeholder="Depature Date"/>
                    {currentTripOption === "Round trip" ? <DatePick id="arrivalDate" placeholder="Returning Date"/> : ""}
                </div>
            </div>
            <button className="bg-gray-500 px-4 py-2 hover:bg-gray-400 self-center mt-4">Search</button>
        </form>    
      </div>
    )
}

export default Form
