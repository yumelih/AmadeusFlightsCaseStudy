import {format, parseISO, isSameDay, addMinutes } from "date-fns";
// import { useForm } from "../contexts/FormContext"

// import { useEffect, useMemo, useRef, useState } from "react";

export default function SubTable({flights}) {
  console.log(flights)
 
  function durationFormula(d1) {
    const hours = Math.floor(d1 / 60);
    const remainingMinutes = d1 % 60;

    const formattedDifference = `${hours} hours ${remainingMinutes} minutes`;

    return formattedDifference;
  }

  function arrDate(d1, duration) {
    const date = parseISO(d1);

    const newDate = addMinutes(date, duration);

    const newIsoDateTimeString = format(newDate, "MM.dd.yyyy");

    return {newDate, newIsoDateTimeString}
  }


  return (
    <div className="mt-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-white">
            Returning Flights
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div> */}
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
                 {flights?.map((flig) => ( 
                    <tr key={flig.flight_number}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {flig.departure_airport + " - " + flig.arrival_airport}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {flig.airlines}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {format(new Date(flig.departure_date), 'HH.mm') + ' - ' + format(arrDate(flig.departure_date, Number(flig.duration)).newDate, 'HH.mm')}
                      </td>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {format(new Date(flig.departure_date), 'MM.dd.yyyy') + ' - ' + arrDate(flig.departure_date, Number(flig.duration)).newIsoDateTimeString}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {durationFormula(flig.duration)}
                      </td>
                 
                     
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {flig.transit ? 'Yes': "No"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                         {flig.price}
                      </td>
                      
                 </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
