import DatePick from "./DatePick"
import Dropdown from "./Dropdown"
import Input from "./Input"
import { useForm } from "../contexts/FormContext"



function Form() {
    const {currentTripOption} = useForm()

    return (
        <div className="sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-6 px-2 py-3 bg-gray-700 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <form className="flex flex-col gap-2 items-start">
            <Dropdown /> 
            <div className="flex gap-4">
                <div className="flex gap-1">
                    <Input key='departureAirport' id="departureAirport"  placeholder="Where from?"/>
                    <Input key="arrivalAirport" id="arrivalAirport" placeholder="Where to?"/>
                </div>
                <div className="flex gap-1">
                    <DatePick id="departureDate" placeholder="Depature Date"/>
                    {currentTripOption === "Round trip" ? <DatePick id="arrivalDate" placeholder="Arrival Date"/> : ""}
                </div>
            </div> 
        </form>    
      </div>
    )
}

export default Form
