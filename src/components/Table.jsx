import {differenceInMinutes, format, isSameDay, isSameMonth, isSameYear } from "date-fns";
import { useForm } from "../contexts/FormContext"
import { useFlight } from "../hooks/useFlight";
import { useEffect, useMemo, useState } from "react";
import SubTable from "./SubTable";
import SortBy from "./SortBy";

export default function Table() {
  const {departureAirport, arrivalAirport, departureDate, arrivalDate, currentTripOption, sortBy} = useForm();
  const {flight, loading, error} = useFlight(departureAirport?.split("-")[0], arrivalAirport?.split("-")[0])
  const [F, setF] = useState([])
  const returningFlights = F?.flatMap(elm => elm.returning_flights).flat()

  const flights = useMemo(() => {
    return flight;
  }, [flight])
  



  function durationFormula(d1, d2) {
    const minutesDifference = differenceInMinutes(d1, d2);

    const hours = Math.floor(minutesDifference / 60);
    const remainingMinutes = minutesDifference % 60;

    const formattedDifference = `${hours} hours ${remainingMinutes} minutes`;

    return formattedDifference
  }

  
  function checkIfDatesAreEqual(d1, d2) {
    const date1 = new Date(d1);  
    const date2 = new Date(d2)

    const areEqualDay = isSameDay(date1, date2);
    const areEqualMonth = isSameMonth(date1, date2);
    const areEqualYear = isSameYear(date1, date2);

    
    if (areEqualDay && areEqualMonth && areEqualYear) return true

  }

  // console.log(F)
  useEffect(() => {
    setF(flights?.filter((f) => {
      return checkIfDatesAreEqual(departureDate, f.departure_date)  
    }))

  }, [departureDate, arrivalDate, flights, currentTripOption, sortBy])




  return (
    <div className="mt-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-white">
            Departing Flights
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <SortBy/>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Between
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Airlines
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date 
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Time 
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Transit
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                 
                    {/* <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {F?.map((flig) => (
                    <tr key={flig.flight_number}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {flig.departure_airport + " - " + flig.arrival_airport}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {flig.airlines}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {format(new Date(flig.departure_date), 'MM.dd.yyyy') + ' - ' + format(new Date(flig.arrival_date), 'MM.dd.yyyy')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {format(new Date(flig.departure_date), 'HH.mm') + ' - ' + format(new Date(flig.arrival_date), 'HH.mm')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {durationFormula(new Date(flig.arrival_date), new Date(flig.departure_date))}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {flig.transit ? 'Yes': "No"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                        {flig.price}
                      </td>
                      {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <span
                      
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {type}
                        </span>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {currentTripOption === 'Round trip' && <SubTable flights={returningFlights} returningDate={arrivalDate}/>}
    </div>
  );
}
