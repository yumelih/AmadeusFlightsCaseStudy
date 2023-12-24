import supabase from "./supabase";

export async function getFlight(departureAirport, arrivalAirport) {
    const {data, error} = await supabase.from("flights").select("*").eq("departure_airport", departureAirport).eq('arrival_airport', arrivalAirport)

    if(error) {
        throw new Error('Flight not found!')
    }

    return data
}