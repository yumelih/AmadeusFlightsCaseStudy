import { useQuery } from "@tanstack/react-query";
import { getFlight } from "../services/apiFlights";
import { useForm } from "../contexts/FormContext";
import { compareDates } from "../helpers/compareDates";
import { differenceBetweenDates, sortDatesDuration } from "../helpers/differenceBetweenDates";

export function useFlight(departureAirport, arrivalAirport) {
  const {sortBy} = useForm()

  const sortValue = sortBy?.value ? sortBy?.value : 'price-asc';

  const [field, direction] = sortValue.split('-');

  const currentSort = {field, direction}


  let {
    isLoading,
    data: flight,
    error,
  } = useQuery({
    queryKey: ["flight", departureAirport, arrivalAirport],
    queryFn: () => getFlight(departureAirport, arrivalAirport),
  });

  if(currentSort) {
    switch(currentSort.field) {
      case 'price':
        flight = flight?.sort((a, b) => { 
          return currentSort.direction === 'asc' ? Number(a["price"].slice(1)) - Number(b["price"].slice(1)) : Number(b["price"].slice(1)) - Number(a["price"].slice(1))})
        break
      case 'departure_date':
        flight = flight?.sort((a, b) => {
          return currentSort.direction === 'asc' ? compareDates(a['departure_date'], b['departure_date']) : compareDates(b['departure_date'], a['departure_date'])
        })
        break
      case 'arrival_date':
          flight = flight?.sort((a, b) => {
            return currentSort.direction === 'asc' ? compareDates(a['arrival_date'], b['arrival_date']) : compareDates(b['arrival_date'], a['arrival_date'])
          })
          break
      case 'duration':
        flight = flight?.sort((a, b) => {
          return currentSort.direction === 'asc' ? sortDatesDuration(differenceBetweenDates(a['arrival_date'], a['departure_date']), differenceBetweenDates(b['arrival_date'], b['departure_date']))  : sortDatesDuration(differenceBetweenDates(b['arrival_date'], b['departure_date']), differenceBetweenDates(a['arrival_date'], a['departure_date'])) 
        })
        break
      default:
        flight = flight?.sort((a, b) => { return currentSort.direction === 'asc' ? Number(a["price"].slice(1)) - Number(b["price"].slice(1)) : Number(b["price"].slice(1)) - Number(a["price"].slice(1))})
    }
  }

  return { flight, isLoading, error };
}
