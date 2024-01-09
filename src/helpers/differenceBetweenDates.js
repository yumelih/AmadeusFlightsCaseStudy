import { differenceInSeconds } from "date-fns"

export function differenceBetweenDates(d1, d2) {
    const date1 = new Date(d1)
    const date2 = new Date(d2)

    const diffInSeconds = differenceInSeconds(date1, date2)

    return diffInSeconds
}

export function sortDatesDuration(s1, s2) {
    if(s1 > s2) {
        return 1
    } else if(s1 === s2) {
        return 0;
    } else {
        return -1
    }
}