/*
 * Name: Lab 2 - Find Day in Gregorian Calendar Algroithm
 * Date: 2022 - 09 - xx
 * Description: Core function and helper functions that follow a mathematical algorithm to determine the day of the
 *              week for any given day. whilst also taking into account the edge cases surrounding leap and 
 *              centennial years.
 */

const funcDatabase = {
    yearOffset: {
        16: 6,
        17: 4,
        18: 2,
        19: 0,
        20: 6,
        21: 4
    },
    monthRef: {
        "jan": 1,
        "feb": 4,
        "mar": 4,
        "apr": 0,
        "may": 2,
        "jun": 5,
        "jul": 0,
        "aug": 3,
        "sep": 6,
        "oct": 1,
        "nov": 4,
        "dec": 6
    },
    // Used an array because the key:value mirrored an array index and this is easier on memory
    weekdayRef: [
        "saturday",
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday"
    ]
}

const getYearValue = (year) => {
    const lastDigits = year % 100;
    const quotient = Math.floor(lastDigits / 12);
    const remainder = lastDigits % 12;
    const getFoursInRemainder = Math.floor(remainder / 4);
    return (quotient + remainder + getFoursInRemainder);
};

/*
 * Used two ifs instead of if/else statements as it would be easier to add to this structureand because the return 
 * statements mimick the conditional relationship of an if/else structure's true/false values.
 */
const isLeapYear = (year) => {
    // Used not divisible to avoid nesting of true conditions
    if (year % 4 !== 0) {
        return false;   
    } 
    if (year % 100 !== 0) {
        return true;
    }
    // Returned the mod operation itself as it will resolve in a true/false value which is what I am looking for
    return year % 400 === 0;
}
 
const calcYearOffset = (year) => {
    const firstDigits = Math.floor(year / 100);
    //Conditional logic was mirroring the key : value structure of an object.
    return funcDatabase.yearOffset[firstDigits];
}

const getMonthValue = (month, year) => {
    const inputMonth = month;
    const monthLowercase = inputMonth.toLowerCase();
    const monthAbbrv = monthLowercase.slice(0, 3);
    const monthValue = funcDatabase.monthRef[monthAbbrv] + calcYearOffset(year);
    // Ternary: (condition) ? true : false; 
    return isLeapYear(year) && ((monthAbbrv === "jan") || (monthAbbrv === "feb")) ? monthValue - 1 : monthValue;
};

const getDayOfTheWeek = (year, month, day) => {
    const getDaysSinceOrigin = (getYearValue(year) + day + getMonthValue(month, year));
    const getDayOfWeekOffset = getDaysSinceOrigin % 7;
    const weekday = funcDatabase.weekdayRef[getDayOfWeekOffset];
    return weekday;
};

// This is for testing purposes only:
/*
 * Should return undefined for year outside function's use case
 * Expect undefined
 */
console.log(getDayOfTheWeek(2300, "feb", 22));

/*
 * Should return correct day for centennial leap year
 * Expect tuesday
 */
console.log(getDayOfTheWeek(1600, "feb", 22));

/*
 * Should return correct day for leap year
 * Expect thursday
 */
console.log(getDayOfTheWeek(1996, "feb", 22));

/*
 * Should return correct day for centennial year
 * Expect saturday
 */
console.log(getDayOfTheWeek(1631, "feb", 22));

/*
 * Should return correct day for year without any offset
 * Expect friday
 */
console.log(getDayOfTheWeek(1935, "feb", 22));

