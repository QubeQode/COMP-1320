/* Will test functions, loops, working with variables + passing things into func, basic math ops
 * Front end for inputting CC info
 *
 * CC info is passed into a function within web server
 *
 * Course Goal: Using Node to build a web server
 *      1. Front End recieves user input
 *      2. Is it a number?
 *      3. Sent to backend if yes
 *      4. Program hosted on hardware is called web server
 *      5. Payment service goes to database to verify if cc details are legit
 *      6. Database returns whether cc is legit or not
 *      7. Continue with transaction
 * 
 * What if you have millions of users doing transactions at once?
 * Bot users will try a mass of cc numbers hoping one of them will work
 * Have to deal with legit and fraudulent transactions
 * 
 * To reduce the cost and stopping millions of interactions w database just for cc
 * 
 * IBM - Luhn's "CHECKSUM" - figures out if legit or not without accessing database
 * Can verify legitimacy and tells you what company the card belongs to 
 * 
 * ReadlineSync for inputs
 * 
 * Additional restriction: Not allowed to use strings except if logging the card name
 */

/*
* -Repeat question-
* AmEx = 15 digits => start with 34 or 37
* MasterCard = 16 digits => start with 51, 52, 53, 54, 55
* Visa = 13 or 16 digits => start with 4
*
* Algorithm that does the following:
1. Multiply every other digit by 2, starting with second-to-last digit
2. Add the digits of this multiplication for a total sum
3. Add the total sum to the total of non-multiplied digits
4. It total's last digit = 0, then number is valid
5. Console.logs if the card is a valid card number
6. Console.logs what type of card the number belongs to
*
* -Ask + Clarify-
*
* How are we recieving the data?
- readlineSync
*
* How are isolating the second last etc digits?
- 2nd last = math.floor(cc / 100)
- 4th last = math.floor(cc/ 10000)
- So on and so forth
- We need iteration that stops on the 1st digit
* 
* How are we setting up the iteration?
- Stop condition = currentDigit / 100 < 0
- Base case = /10 the first time
* 
* -Explain using data-
*
* 4003600000000014
* 1. 1*2 + 6*2 + 4*2
* 2. 2 + 1 + 2 + 8 = 13
* 3. 13 + 4 + 3 = 20 [0's are ignored as they hold no value]
* 20 % 10 = 0
* Card is valid
* Card starts with a 4 therefore is Visa
*
* -Outline pseudocode-
*
* // readlineSync asks for input
*
* const creditCheck = (string) => {
    const cardNumber = parseInt(string);
    let total = 0
    while (reducedCardNumber / 10 > 0) {
        total += (creditCardNumber % 10);
        reducedCardNumber = Math.floor(creditCardNumber / 10);
        const oddDigit = ((creditCardNumber % 10) * 2);
        if (oddDigit > 10) {
            total += Math.floor(oddDigit / 10);
            total += oddDigit % 10;
        } else {
            total += oddDigit;
        }
        reducedCardNumber = Math.floor(creditCardNumber / 10);
    }
    if (total % 10 !== 0) {
        console.log('Invalid');
        return;
    }
    console.log('Valid');
}
*
* -Refactor into code-
*
*
*/

const readlineSync = require( 'readline-sync' );


const inputNumber  = readlineSync.question( 'What is your credit card number?');


const creditCheck = (string) => {
    let cardNumber = parseInt(string);
    let total = 0;
    let firstDigit = 0;
    let firstTwoDigits = 0;
    const numberOfDigits = (Math.floor(Math.log10(cardNumber))) + 1;
    while (cardNumber / 10 > 0) {
        total += (cardNumber % 10);
        cardNumber = Math.floor(cardNumber / 10);
        const oddDigit = ((cardNumber % 10) * 2);
        if (oddDigit > 10) {
            total += Math.floor(oddDigit / 10);
            total += oddDigit % 10;
        } else {
            total += oddDigit;
        }
        cardNumber = Math.floor(cardNumber / 10);
        // firstDigit + firstTwoDigits are found, but then wiped to 0 by last iteration of loop.
        if (cardNumber / 1000 < 1) {
            firstDigit = Math.floor(cardNumber / 100);
            firstTwoDigits = Math.floor(cardNumber / 10);
        // Need to implement above two redefinitions to isolate the digits by the end of loop, can't
        }
    }
    if (total % 10 !== 0) {
        console.log('Invalid');
        return;
    }
    if (firstDigit === 4 && (numberOfDigits === 13 || numberOfDigits === 16)) {
        console.log('Visa');
        return;
    }
    if ( (firstTwoDigits === 34 || firstTwoDigits === 37) && (numberOfDigits === 15)) {
        console.log('American Express');
        return;
    }
    if ( (firstTwoDigits === 51 || firstTwoDigits === 52|| firstTwoDigits === 53 ||
      firstTwoDigits === 54 || firstTwoDigits === 55 ) && (numberOfDigits === 16)) {
         console.log('Mastercard');
         return;
    }
};

creditCheck(inputNumber);

// Lab Review:
// The goal isn't to get an answer. It is to MAKE YOUR LOGIC CLEAR
// Variable names in camelCaps and logically make sense
// Functions should achieve a single thing/ answer a single, contained section. SRP
// Main function should read like a clear path through logic so pick helper function names well
// Helper functions modularize logical process into segments