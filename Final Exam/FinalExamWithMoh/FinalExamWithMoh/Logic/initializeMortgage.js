const { readFile } = require('fs').promises;
const { join } = require('path');
const { EOL } = require('os');

const retrieveMortgageData = () => {
    return readFile(join(__dirname, '..', 'data.csv'), 'utf-8')
        .then((data) =>{
            const mortgageArray = data.split(EOL);

            // EXPECTED OUTPUT: `['200000,0.003,2000', '410000,0.0025,2200']`
            const mortgageData = [];
            for(line of mortgageArray) {
                mortgageData.push(line.split(","));
                // EXPECTED OUTPUT: [['200000,0.003,2000'], ['410000','0.0025',2200']]
            }
            return mortgageData;
        })
        .catch((err) => console.error(err));
};

retrieveMortgageData();

const convertToDollars = (num) => parseInt(num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

const initialValue = () => {
    let counter = 1;
    retrieveMortgageData()
        .then((mortgageData) => {
            mortgageData.forEach(subArray => {
                console.log(
        `Mortgage ${counter}
            Starting Total: ${convertToDollars(subArray[0])}
            Monthly Payment: ${convertToDollars(subArray[2])}
            Monthly Interest: ${subArray[1]}`
                )
                counter++
            })
        })
        .catch((err) => console.error(err));
};

module.exports = { retrieveMortgageData, initialValue };