import { useQuery } from "@tanstack/react-query";
import { getFlight } from "../services/apiFlights";
import { useForm } from "../contexts/FormContext";

export function useFlight(departureAirport, arrivalAirport) {
  const {sortBy} = useForm()

  const sortValue = sortBy?.value ? sortBy?.value : 'price-asc';

  const [field, direction] = sortValue.split('-');

  const currentSort = {field, direction}


  const {
    isLoading,
    data: flight,
    error,
  } = useQuery({
    queryKey: ["flight", departureAirport, arrivalAirport, currentSort],
    queryFn: () => getFlight(departureAirport, arrivalAirport, currentSort),
  });

  return { flight, isLoading, error };
}
