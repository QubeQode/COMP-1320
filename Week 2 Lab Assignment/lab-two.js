/* eslint-disable no-restricted-syntax */
/*
 * Name: Lab 2 - Find Day in Gregorian Calendar Algorithm
 * Date: 2022 - 09 - 21
 * Description: Core function and helper functions that follow a mathematical algorithm to
 *              determine the day of the week for any given day. As well as a function to print
 *              all dates in a year.
 */

// Destructuring to remove repitition between variable name and dot notation
const { yearOffset } = require('./data');
const { monthRef } = require('./data');
const { weekdayRef } = require('./data');

const getYearValue = (year) => {
  const lastDigits = year % 100;
  const quotient = Math.floor(lastDigits / 12);
  const remainder = lastDigits % 12;
  const getFoursInRemainder = Math.floor(remainder / 4);
  return (quotient + remainder + getFoursInRemainder);
};

/*
 * Used two ifs not if/else as  easier to add to this structure and because return statements
 * mimic conditional relationship of if/else true/false values.
 */
const isLeapYear = (year) => {
  // Used not divisible to avoid nesting of true conditions
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 !== 0) {
    return true;
  }
  // Returned mod-result/0 as it will resolve in a true/false value itself
  return year % 400 === 0;
};

const calcYearOffset = (year) => {
  const firstDigits = Math.floor(year / 100);
  // Conditional logic was mirroring the key : value structure of an object.
  return yearOffset[firstDigits];
};

const getMonthValue = (month, year) => {
  const inputMonth = month;
  const monthLowercase = inputMonth.toLowerCase();
  const monthAbbrv = monthLowercase.slice(0, 3);
  const monthValue = monthRef[monthAbbrv].monthOffset + calcYearOffset(year);
  // Ternary: (condition) ? true : false;
  return isLeapYear(year) && ((monthAbbrv === 'jan') || (monthAbbrv === 'feb')) ? monthValue - 1
    : monthValue;
};

const getDayOfTheWeek = (year, month, day) => {
  if (year > 2199) {
    return "Sorry, I can't see that far into the future.";
  }
  if (year < 1600) {
    return 'Apologies, I seem to have forgotten.';
  }
  const getDaysSinceOrigin = (getYearValue(year) + day + getMonthValue(month, year));
  const getDayOfWeekOffset = getDaysSinceOrigin % 7;
  const weekday = weekdayRef[getDayOfWeekOffset];
  return weekday;
};

/*
 * makeCalendar() function resulting in listing of all dates + days of week for 2022
 * output = print "day-month-year is a [weekday]"
 * - weekday can be found from the output of getDayOfTheWeek(year, month, day)
 *    requires defined variables for year, month, day
 * - year = 2022
 * - important properties of month added to monthRef object:
 * 1. gregorian numeric representation
 * 2. maxVal #of days
 * - 2 for loops to iterate through months an days specifically
 * 1. const monthList = Object.keys(monthRef) --> for (month of monthList)
 *    const currentMonth = monthRef[month].gregorianIndex
 *    const lastDay = monthRef[month].lastDay
 * 2. for (let day = 1, day < lastDay + 1, day++)
 *    const currentDay = day
 *    const dayOfWeek = getDayOfTheWeek(year, month, day)
 *    const printedMessage = `$currentDay-$currentMonth-$inputYear is a $dayOfTheWeek.`
 * Because makeCalendar only has to handle 2022, there is no need for the edgecase of February in a
 *  leap year.
 */

const makeCalendar = () => {
  const year = 2022;
  const monthList = Object.keys(monthRef);
  for (const month of monthList) {
    const currentMonth = monthRef[month].gregorianIndex;
    const { lastDay } = monthRef[month];
    for (let day = 1; day <= lastDay; day++) {
      const dayOfWeek = getDayOfTheWeek(year, month, day);
      const printedMessage = `${currentMonth}-${day}-${year} is a ${dayOfWeek}.`;
      console.log(printedMessage);
    }
  }
};

module.exports = { getDayOfTheWeek, makeCalendar };

// This is for testing purposes only:
/*
 * Should return error message for year above function's use case
 * Expect: Sorry, I can't see that far into the future.
 */
// console.log(getDayOfTheWeek(2300, 'feb', 22));

/*
 * Should return error message for year below function's use case
 * Expect: Apologies, I seem to have forgotten.
 */
// console.log(getDayOfTheWeek(1599, 'feb', 22));

/*
 * Should return correct day for centennial leap year
 * Expect: tuesday
 */
// console.log(getDayOfTheWeek(1600, 'feb', 22));

/*
 * Should return correct day for leap year
 * Expect: saturday
 */
// console.log(getDayOfTheWeek(1992, 'feb', 22));

/*
 * Should return correct day for centennial year
 * Expect: saturday
 */
// console.log(getDayOfTheWeek(1631, 'feb', 22));

/*
 * Should return correct day for year without any offset
 * Expect: friday
 */
// console.log(getDayOfTheWeek(1935, 'feb', 22));
