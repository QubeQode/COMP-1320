
const fs = require('fs');
const { EOL } = require('os');

const readFileP = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf8", (err, data) => {
            if (err) { 
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};

const appendFileP = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(file, data, (err) => {
            if (err) { 
                reject(err);
            } else {
                resolve();
            }
        })
    })
};

const viewAllSupply = (coffeeType) => {
    return readFileP('supply.txt')
    .then(data => {
        let counter = 0;
        for (const eachCoffee of data.split(EOL)) {
            if (eachCoffee === coffeeType) {
                counter++;
            }
        }
        return counter;
    })   
};

const addSupply = (coffeeType) => {
    return appendFileP('supply.txt', `${EOL}${coffeeType}`)
}

viewAllSupply("blonde")
.then(count => console.log(count))
.then(() => addSupply("blonde"))
.then(() => viewAllSupply("blonde"))
.then(count => console.log(count))
.catch(err => console.log(err))


/*
 * -Repeat question-
* 1. viewAllSupply should accept:
*  - dark-roast
*  - medium-roast
*  - blonde
* And return a single number that represents
* 
* -Ask + Clarify-
 * How to view all supply?
 * fs.readFile(/supply.txt)
 * 
 * How to store the supply info for the function?
 * string.split('line end')
 * 
 * Universal solution for end of line?
 * os.EOL
 * 
 * What API's are being used in this file?
 * const fs = require('fs')
 * const os = require('os')
 * 
 * -Explain using data-
 * viewAllsupply -> blonde
 * readsfile -> supply.txt
 * parses through data and counts how many times 'blonde' appears
 * returns the number of 'blonde' values in supply.txt
 * 
 * 
 * -Outline pseudocode-
*/

// Function Signature: const viewAllSupply = (coffee-type) => # of coffee-type

// const viewAllSupply = (coffee) => {
    // return New Promise(resolve, reject) => {
        // fs.readFile(`/supply.txt`, 'utf-8', (err, data) => {
            // if (err) {
                // return reject(err);
                // }
                // resolve(data);
                // })
    // }
    // };
    
    /*
    * -Refactor into code-
    */

/*
 * -Repeat question-
 * 1. addSupply should accept:
 *  - dark-roast
 *  - medium-roast
 *  - blonde
 * And append whatever is passed into it to the end of supply.txt
 *
 * -Ask + Clarify-
 * How to append to file?
 * fs.appendFile()
 *
 * -Explain using data-
 * addSupply -> blonde
 * appendFile supply.txt
 * appends -> blonde
 *
 * -Outline pseudocode-
 */


 
/*
 * -Refactor into code-
 */