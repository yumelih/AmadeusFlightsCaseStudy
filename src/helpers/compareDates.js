import { isAfter, isEqual } from "date-fns"

export function compareDates(d1, d2) {
    const date1 = new Date(d1)
    const date2 = new Date(d2)

    if (isEqual(date1, date2)) {
        return 0; // Return 0 when dates are equal
    }

    return isAfter(date1, date2) ? 1 : -1
}

console.log(compareDates("2023-12-31T09:26:54+00:00","2023-12-30T23:17:48+00:00"))