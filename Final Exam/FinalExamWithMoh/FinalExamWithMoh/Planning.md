# App + Features:

<br>

1. mortgage.csv file contains mortgage data
- **Clause 1:** original mortgage
- **Clause 2:** monthly interest rate
- **Clause 3:** monthly payment

```
200000,0.003,2000
```

<br>

2. Accept user input through CLI and calculate based off of retrieved values

<br>

3. App calculates for a number of months input by user and outputs these monthly calculations into the CLI:
- mortgage
- balance
- payment to principal
- payment to interest

<br>

# Requirements

<br>

1. App cannot make use of objects or maps, must make user of arrays for data storage

<br>

2. App must make use of modular functionality in logic

<br>

3. App must be able to retrieve a number of months to produce output for from the user input in CLI

<br>

4. App must be able to handle invalid user input in CLI

<br>

5. App must be able to exit when user types 0 for input in CLI

<br>

6. App must begin response with following block of info for every mortgage:

```
Mortage X
    Starting Total: $X
    Monthly Payment: $X
    Monthly Interest: X
``` 

<br>

7. App must calculate the following for the number of months the user input:
    - Remaining Balance
    - Payment to Principal
    - Payment to Interest

<br>

# Code Functionality

<br>

## readline-sync - Accept user input through CLI and calculate based off of retrieved values

<br>

1. Will retrieve the number of months to produce output for
2. Will handle invalid inputs
3. Will exit when user types 0

<br>

### 1 - assign a variable to readline-sync input

```
const readline = require('readline-sync');

const userInput = readline.question(`How many months do you want to calculate your mortgage payments for?`);
```
### 2 - typeof check to ensure the input is a number
```
if (userInput typeof !== 'Number') {
    console.log(`Please input a number for the month value`)
}
```
### 3 - conditional to check if 0 is input

```
if (userInput === 0) {
    break;
}

// Alternative Solution?

while (userInput !== 0) {
    // insert app logic here
}
```

<br>

## App calculates for a number of months input by user and outputs these monthly calculations into the CLI

<br>

1. App must begin response with following block of info for every mortgage
2. App must calculate per month:
    - Remaning Balance
    - Payment to Principle
    - Payment to Interest

<br>

### 1 - Produce basic info p mortgage

<br>

```
Mortage X
    Starting Total: $X
    Monthly Payment: $X
    Monthly Interest: X
``` 

<br>

initializeMortgage.js
```
const { readFile } = require('fs').promises;
const {EOL} = require('os');

const retrieveMortgageData = () => {
    return fs.readFile(path.join(__dirname, '..', 'data.csv'));
    .then((data) =>{
        const mortgageArray = data.split(`${EOL}`);
        // EXPECTED OUTPUT: `['200000,0.003,2000', '410000,0.0025,2200']`

        const mortgageData = [];
        for(line of mortgageArray) {
            mortgageData.push(line.split(","))
            // EXPECTED OUTPUT: [['200000,0.003,2000'], ['410000','0.0025',2200']]
        }
        return mortgageData
    })
    .catch((err) => console.error(err));
};

const convertToDollars = (num) => parseInt(num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

const counter = 1;

const initialValue = (array) => {
    array.forEach (sub-array => {
        console.log(
`Mortgage{counter}
    Starting Total: ${convertToDollars(sub-array[0])}
    Monthly Payment: ${convertToDollars(sub-array[2])}
    Monthly Interest: ${sub-array[1]}`
        )
        counter ++
    })
};

EXPECTED OUTPUT: 

Mortgage 1
Starting Total: $200,000.00
Monthly Payment: $2000.00
Monthly Interest: 0.003

Mortgage 2
Starting Total: $410,000.00
Monthly Payment: $2200.00
Monthly Interest: 0.0025

module.exports = { retrieveMortgageData };
```

<br>

### 2 - Calculate remaining balance, payment to principle, payment to interest p month

<br>

interestPaymentCalculations.js
```
const paymentToInterest = (startingTotal, monthlyInterest) => {
    return startingTotal * monthlyInterest;
}

const interest = (startingTotal, monthlyInterest) => {
    return paymentToInterest(startingTotal, monthlyInterest);
}

const remainingBalance = (startingTotal, monthlyInterest, monthlyPayment) => {
    return startingTotal - interest(monthlyPayment - monthlyInterest);
}

const paymentToPrincipal = (startingTotal, monthlyInterest, monthlyPayment) => {
    return monthlyPayment - interest(startingTotal, monthlyInterest);
}

module.exports = { remainingBalance, paymentToInterest, paymentToPrincipal };
```

printPaymentProportion.js
```
const { retrieveMortgageData } = require(path.join(__dirname, '.', 'initializeMortgage'));
const { remainingBalance, paymentToInterest, paymentToPrincipal } = requirepath.join(__dirname, '.', 'interestPaymentCalculations.js'));
const { EOL } = require('os');

// Calculates interest payment proportionality for number of months input by user

printMonthlyPaymentData = (months) => {
    let balances = retrieveMortgageData();
    // EXPECTED VALUE: [['200000,0.003,2000'], ['410000','0.0025',2200']]

    //monthly prints
    for (let i=1; i<= months; i++) {
        console.log(`*** Month${i} ***`));
        for (mortgage of balances) {
            balances[0] -= paymentToInterest();

            console.log("Mortgage " + parseInt(balances.indexOf(mortgage) + 1));
            console.log(`\tRemaining Balance: $"+toDollarFormat(balances[mortgageData.indexOf(mortgage)][0])`);
            console.log("\tPayment to Principal: $"+toDollarFormat(balances[mortgageData.indexOf(mortgage)][2])`);
            console.log(`\tPayment to Interest: "+ balances[mortgageData.indexOf(mortgage)][1] + ${EOL}`);
        }
    }
};

module.exports = printMonthlyPaymentData;
```
