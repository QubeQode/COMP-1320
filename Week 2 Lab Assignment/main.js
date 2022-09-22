const { getDayOfTheWeek } = require('./lab-two');
const { makeCalendar } = require('./lab-two');
const readline = require('readline-sync');

makeCalendar();

/*
 * prints day of the week for the year, month, day inputted by user
 * readline-sync used for terminal inputs
 * const year = readline.question('Please provide a year:')
 * const month = readline.question('Please provide a month:')
 * const date = readline.question('Please provide a date:')
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