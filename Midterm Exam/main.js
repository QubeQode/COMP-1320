/*
 * -Repeat question-
 * viewAllSupply
 * Returns a single number representing coffee in stock
 * Accepts:
 * - DR (dark roast)
 * - MR (medium roast)
 * - B (blonde)
 * 
 * validateEntries
 * Give error message if the value passed in is not:
 * - DR
 * - MR
 * - B
 *
 *
 * -Ask + Clarify-
 *
 *
 *
 * -Explain using data-
 * Computer intakes input value
 * Compares input value against 'DR' 'MR' 'B'
 * - If value matches proceeds
 * - If value doesn't match returns error
 * 
 * Provided passed in value matches:
 * Computer reads the file 'supply.txt'
 * Computer takes the data obtained from file
 * Computer searches through the data and looks for
 *  input coffeeType
 * Computer creates tally of every repetition
 * Computer logs the tally value to console
 * 
 *
 * -Outline pseudocode-
 */
 
 // verifyInputs = (coffeeType) => {
        // if (coffeeType !== 'DR' || coffeeType !== 'MR' || coffeeType !== 'B') {
                // console.log ('The value input is not recognized by the function. Please use DR for dark roast, MR for medium roast or B for blonde');
                // return;
        // }
        // return 'Valid Input';
 // };

 // viewAllSupply = (coffeeType) => {
        // return new Promise((resolve, reject) => {
            // fs.readFile('supply.txt', 'utf-8', (err, data) => {
                // if (err) {
                    // reject(err);
                    // return;
                // }
                // .then(data => {
                    // let counter = 0;
                    // for (const eachCoffee of data.split(EOL)) {
                        // if (eachCoffee === coffeeType) {
                            // counter++;
                        // }
                    // }
                    // resolve(counter);
                // })
            // })
        // })
// };
 
/*
 * -Refactor into code-
 */

const fs = require('fs');
const { EOL } = require('os');

const verifyInputs = (coffeeType) => {
    if ((coffeeType === 'DR') || (coffeeType === 'MR') || (coffeeType === 'B')) {
        return true;
    }
    console.log ('The value input is not recognized by the function. Please use DR for dark roast, MR for medium roast or B for blonde');
    return;
};

const viewAllSupply = (coffeeType) => {
    if (verifyInputs(coffeeType) === true) {
        if (coffeeType === 'DR') {
            coffeeType = 'dark-roast';
        }
        if (coffeeType === 'MR') {
            coffeeType = 'medium-roast';
        }
        if (coffeeType === 'B') {
            coffeeType = 'blonde';
        }
        return new Promise((resolve, reject) => {
            fs.readFile('supply.txt', 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                let counter = 0;
                for (const eachCoffee of data.split(EOL)) {
                    if (eachCoffee === coffeeType) {
                        counter++;
                    }
                }
                resolve(counter);
            })
        })
    }
};

const addSupply = (coffeeType) => {
    if (verifyInputs(coffeeType) === true) {
        return new Promise((resolve, reject) => {
            if (coffeeType === 'DR') {
                fs.appendFile('supply.txt', `${EOL}dark-roast`, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                })
            }
            if (coffeeType === 'MR') {
                fs.appendFile('supply.txt', `${EOL}medium-roast`, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                })
            }
            if (coffeeType === 'B') {
                fs.appendFile('supply.txt', `${EOL}blonde`, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                })
            }
        })
    }
};

/*
 * -Repeat question-
 * deleteSupply
 * intakes:
 * - coffeeType
 * - quantity
 * 
 * Accepts:
 * - DR, MR, B
 * - * or number
 * 
 * If * passed in then delete all instances of coffeeType
 * - log 'All ${coffeeType} coffee(s) deleted.'
 * If number passed in delete that number
 * - log '${number} ${coffeeType} coffee(s) deleted
 *
 * -Ask + Clarify-
 *
 * How will I delete the relevant entries?
 * array.filter to filter out the input coffeeType
 * However this seems to do it for all entries matching
 *
 * -Explain using data-
 *
 * computer will parse through supply.txt retrieved data
 * computer will search for every instance of coffeeType in returned array
 * computer will delete these instances of coffeeType from array
 * computer will overwrite supply.txt to reflect the removal
 * computer will log message dictating how much was deleted
 *
 *
 * -Outline pseudocode-
 */

// deleteSupply = (coffeeType, number) => {
    // return new Promise((resolve,reject) => {
        // if (number === *) {
            // fs.readFile('supply.txt', 'utf-8', (err, data) => {
                // if (err) {
                    // reject(err);
                    // return;
                // }
                // const supplyArray = data.split(EOL);
                // array.filter(coffeeType => coffeeType === `${coffeeType}`);
                // fs. writeFile('supply.txt', 'utf-8', (err) => {
                    // if (err) {
                        // reject(err);
                        // return;
                    // }
                    // const deleteAll = `All ${coffeeType} coffee(s) deleted.`;
                    // resolve(deleteAll);
                // })
            //})
        // } else {
            // fs.readFile('supply.txt', 'utf-8', (err, data) => {
                // if (err) {
                    // reject(err);
                    // return;
                // }
                // const supplyArray = data.split(EOL);
                // delete an amount of ${coffeeType} = ${number};
                // fs.writeFile('supply.txt', 'utf-8', (err) => {
                    // if (err) {
                        // reject(err);
                        // return;
                    // }
                    // const deleteSome = `${number} ${coffeeType} coffee(s) deleted`;
                    //resolve(deleteSome);
                // })
            // })
        //}
    // }
//}

/*
 * -Refactor into code-
 */

const deleteSupply = (coffeeType, number) => {
    if (verifyInputs === true) {
        if (coffeeType === 'DR') {
            coffeeType = 'dark-roast';
        }
        if (coffeeType === 'MR') {
            coffeeType = 'medium-roast';
        }
        if (coffeeType === 'B') {
            coffeeType = 'blonde';
        }
	    return new Promise((resolve,reject) => {
	        if (number === '*') {
	            fs.readFile('supply.txt', 'utf-8', (err, data) => {
	                if (err) {
	                    reject(err);
	                    return;
	                }
	                let supplyArray = data.split(EOL);
	                supplyArray = supplyArray.filter(coffeeType => coffeeType === `${coffeeType}`);
	                // Need some way to turn this back into a list with line breaks after each value
	                fs. writeFile('supply.txt', `${supplyArray}`, (err) => {
	                    if (err) {
	                        reject(err);
	                        return;
	                    }
	                    const deleteAll = `All ${coffeeType} coffee(s) deleted.`;
	                    resolve(deleteAll);
	                })
	            })
	        } else {
	            fs.readFile('supply.txt', 'utf-8', (err, data) => {
	                if (err) {
	                    reject(err);
	                    return;
	                }
	                let supplyArray = data.split(EOL);
	                // delete an amount of coffeeType === number from supplyArray;
	                // Half-baked solution:
	                // for loop that iterates through our found array
	                // if array[index] = coffeeType
	                // delete array[index]
	                // Do this for a number of times = input parameter for number
	                // if number > # of coffeeType present in array, delete max amount of coffeeType present
	                // Need some way to turn this back into a list with line breaks after each value
	                fs.writeFile('supply.txt', `${supplyArray}`, (err) => {
	                    if (err) {
	                        reject(err);
	                        return;
	                    }
											// if number > # of coffeeType present in array, log max amount of coffeeType present,
											// else {
	                    const deleteSome = `${number} ${coffeeType} coffee(s) deleted`;
	                    resolve(deleteSome);
	                })
	            })
	        }
	    })
	 }
};

viewAllSupply('MR')
    .then((counter) => console.log(counter))
    .then(() => addSupply('MR'))
    .then(() => viewAllSupply('MR'))
    .then((counter) => console.log(counter))
    .then(() => deleteSupply('MR', 2))
    .then((deleteSome) => console.log(deleteSome))
    .then(() => viewAllSupply('MR'))
    .then((counter) => console.log(counter))
    .then(() => deleteSupply('MR', '*'))
    .then((deleteAll) => console.log(deleteAll))
    .then(() => viewAllSupply('MR'))
    .then((counter) => console.log(counter))
    .then(() => console.log('Program is completed.'))
    .catch((err) => console.log(err));