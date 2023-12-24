import { isSameDay, isSameMonth, isSameYear } from "date-fns";

export function checkIfDatesAreEqual(d1, d2) {
    const date1 = new Date(d1);  
    const date2 = new Date(d2)

    const areEqualDay = isSameDay(date1, date2);
    const areEqualMonth = isSameMonth(date1, date2);
    const areEqualYear = isSameYear(date1, date2);

    if (areEqualDay && areEqualMonth && areEqualYear) return true
}