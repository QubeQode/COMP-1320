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
const getDayOfTheWeekForUserDate = (year, month, date) => {
    const foundDay = getDayOfTheWeek(year, month, date);
    console.log(foundDay);
};

const year = readline.question('Please provide a year:');
const month = readline.question('Please provide a month:');
const date = readline.question('Please provide a date:');

getDayOfTheWeekForUserDate(year, month, date);