import { getMinute } from "../helpers/getMinute";
import supabase from "./supabase";

export async function getFlight(departureAirport, arrivalAirport) {
    let query = supabase.from("flights").select("*")

    query = query.eq('departure_airport', departureAirport).eq("arrival_airport", arrivalAirport)

    // if(currentSort) {
    //     query = currentSort.field !== 'duration' && query.order(currentSort.field, {
    //         ascending: currentSort.direction === "asc"
    //     })
    // }

    const { data, error } = await query;

    // let sortedData = currentSort.direction === 'asc' && currentSort.field === 'duration' ? data.sort((a,b) => getMinute(a.departure_date) - getMinute(b.departure_date)) : data.sort((a,b) => getMinute(b.departure_date) - getMinute(a.departure_date))

    if(error) {
        throw new Error('Flight not found!')
    }

    return data
}