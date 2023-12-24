import { parseISO } from "date-fns";

export function getMinute(d1) {
    // Parse ISO 8601 date string into a JavaScript Date object
    const date = parseISO(d1);

    // Calculate the total number of minutes since January 1, 1970 (UTC)
    const minutesSinceEpoch = date.getTime() / (1000 * 60);

    return minutesSinceEpoch;
}