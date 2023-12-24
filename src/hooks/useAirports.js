import { useQuery } from "@tanstack/react-query";
import { getAirports } from "../services/apiAirports";


export function useAirport() {
    const {
        isLoading,
        data: airports,
        error,
    } = useQuery(
        {
            queryKey:["airports"],
            queryFn: () => getAirports(),
        }
    )

    return {airports, isLoading, error}
}