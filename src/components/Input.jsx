import { ViewfinderCircleIcon, MapPinIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

import { useAirport } from '../hooks/useAirports'
import SearchResults from './SearchResults'
import { useForm } from '../contexts/FormContext';

function Input({id, data, placeholder, onChange, onClick}) {
    const {airports, isLoading, error: airportsError} = useAirport();
    const {departureAirport, arrivalAirport, dispatch} = useForm();


    const handleChange = function(e) {
       dispat
    };

    const handleClick = function(key, value) {
        setData(d => {
            return {...d, [key]: value}
        })
    }


    const [results, setResults] = useState([])


    useEffect(() => {
       if(isLoading) return;
       console.log(data, airports)
       const res = airports?.filter(elm => {
            return (
                data &&
                elm.airport.toLowerCase().includes(data.toLowerCase())
            )
        })
        setResults(res)
        console.log(res)
        
    }, [data, isLoading, airports])

    return (
        <div>
            <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                {id === "arrival" ? <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />: <ViewfinderCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
            </div>
            <div className="relative">
                <input
                    type="email"
                    name={id}
                    id={id}
                    value={data}
                    onChange={onChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-1 text-gray-100 ring-2 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-transparent "
                    placeholder={placeholder}
                />
                {results && results.length > 0 && <SearchResults id={id} results={results} onClick={onClick}/>}
            </div>
            </div>
      </div>
    )
}

export default Input
