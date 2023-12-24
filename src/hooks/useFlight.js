import { useQuery } from "@tanstack/react-query";
import { getFlight } from "../services/apiFlights";

export function useFlight(departureAirport, arrivalAirport) {
  const {
    isLoading,
    data: flight,
    error,
  } = useQuery({
    queryKey: ["flight", departureAirport, arrivalAirport],
    queryFn: () => getFlight(departureAirport, arrivalAirport),
  });

  return { flight, isLoading, error };
}
