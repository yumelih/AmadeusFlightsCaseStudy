import { differenceInSeconds } from "date-fns"

export function differenceBetweenDates(d1, d2) {
    const date1 = new Date(d1)
    const date2 = new Date(d2)

    const diffInSeconds = differenceInSeconds(date1, date2)

    return diffInSeconds
}