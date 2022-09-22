const { getDayOfTheWeek } = require('./lab-two');
const { makeCalendar } = require('./lab-two');
const readline = require('readline-sync');

makeCalendar();

/*
 * 1. function that prints day of the week for the year, month, day inputted by user
 * - link to exported getDayOfTheWeek(year, month, day)
 * - Produce a capitalized output (aesthetic choice)
 *      - combine charAt(0) and toUpper case to uppercase first letter
 *      - concatenate with slice(1) to reformulate with capitalization
 *      - console.log variable defined with output
 * 2. readline-sync used for terminal inputs that serve as arguments
 *      - const year = readline.question('Please provide a year:')
 *      - const month = readline.question('Please provide a month:')
 *      - const date = readline.question('Please provide a date:')
 * 3. inline function to print a small explanation for the user (aesthetic choice)
 *      - signature = introMessage = (string) => console.log(string);
 *      - call with small explanation
 */

const getDayOfTheWeekForUserDate = (year, month, day) => {
    const foundDay = getDayOfTheWeek(year, month, day);
    const foundDayUppercase = foundDay.charAt(0).toUpperCase() + foundDay.slice(1);
    console.log(`${foundDayUppercase}!`);
};

const introMessage = (string) => console.log(string);

introMessage("Hi! Give me a year, date and month, and I will return what day it is!");
const year = readline.questionInt('Please provide a year: ');
const month = readline.question('Please provide a month: ');
const day = readline.questionInt('Please provide a date: ');

getDayOfTheWeekForUserDate(year, month, day);