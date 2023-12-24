import { useState } from "react"
import DatePick from "./DatePick"
import Dropdown from "./Dropdown"
import Input from "./Input"
import { useForm } from "../contexts/FormContext"



function Form() {
    const initialInputValues = {
        departureAirport: '',
        arrivalAirport: '',     
    }

    

    const tripTypeOptions = ["Round trip", "One way"]

    const [data, setData] = useState(initialInputValues);
    const [departureDate, setDepartureDate] = useState( new Date())
    const [arrivalDate, setArrivalDate] = useState(null)
    const [tripType, setTripType] = useState(tripTypeOptions[0]);


    function handleArrivalDate(date) {
        const depDate = new Date(departureDate);
        const arrDate = new Date(date)
        if(depDate > arrDate) {
            console.log("ERRORRRRR")
        } 
        else {
            setArrivalDate(arrDate)
        }
    }

    const handleChange = function(e) {
        setData((d) => {
            return {...d, [e.target.name]: e.target.value }
        });
    };

    const handleClick = function(key, value) {
        setData(d => {
            return {...d, [key]: value}
        })
    }



    return (
        <div className="sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-6 px-2 py-3 bg-gray-700 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <form className="flex flex-col gap-2 items-start">
            <Dropdown options={tripTypeOptions} currentOption={tripType} onChange={setTripType}/> 
            <div className="flex gap-4">
                <div className="flex gap-1">
                    <Input key='departureAirport' id="departureAirport" data={data.departureAirport} placeholder="Where from?" onChange={handleChange} onClick={handleClick}/>
                    <Input key="arrivalAirport" id="arrivalAirport" data={data.arrivalAirport} placeholder="Where to?" onChange={handleChange} onClick={handleClick}/>
                </div>
                <div className="flex gap-1">
                    <DatePick selectedDate={departureDate} onDateChange={setDepartureDate} placeholder="Depature Date"/>
                    {tripType === "Round trip" ? <DatePick selectedDate={arrivalDate} onDateChange={handleArrivalDate} placeholder="Arrival Date"/> : ""}
                </div>
            </div> 
        </form>    
      </div>
    )
}

export default Form
