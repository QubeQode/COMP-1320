const readline = require('readline-sync');
const { join } = require('path');
const { initialValue } = require(join(__dirname, 'logic', 'initializeMortgage.js'));
const printMonthlyPaymentData = require(join(__dirname, 'logic', 'printPaymentProportion.js'));

// userInput = readline.question(`How many months do you want to calculate your mortgage payments for?`);

// const checkUserInput = (string) => {
//     if (typeof userInput !== 'number') {
//         console.log('Please input a number for the month value.');
//         userInput;
//     }
// }

while (true) {
    userInput = readline.questionInt(`How many months do you want to calculate your mortgage payments for?`);

    if (userInput === 0) {
        break;
    } else {
        initialValue();
    }
};