import toast from "react-hot-toast";
import supabase from "./supabase";

export async function getAirports() {
    let {data, error} = await supabase.from("airports").select("iata, region_name, airport");

    if(error) {
        toast.error("Airports could not be loaded")
    }

    return data;
}