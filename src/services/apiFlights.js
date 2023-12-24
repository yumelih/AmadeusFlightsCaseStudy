import supabase from "./supabase";

export async function getFlight(departureAirport, arrivalAirport) {
    const {data: flight, error} = await supabase.from("flights").select("*").eq("departure_airport", departureAirport).eq('arrival_airport')

    if(error) {
        throw new Error('Flight not found!')
    }
}