import supabase from "./supabase";

export async function getFlight(departureAirport, arrivalAirport, currentSort) {
    let query = supabase.from("flights").select("*")

    query = query.eq('departure_airport', departureAirport).eq("arrival_airport", arrivalAirport)

    if(currentSort) {
        query = query.order(currentSort.field, {
            ascending: currentSort.direction === "asc"
        })
    }

    const { data, error } = await query;

    if(error) {
        throw new Error('Flight not found!')
    }

    return data
}