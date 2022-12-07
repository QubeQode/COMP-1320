const { EOL } = require('os');
const { join } = require('path');
const { retrieveMortgageData } = require(join(__dirname, '.', 'initializeMortgage'));
const { remainingBalance, paymentToInterest, paymentToPrincipal } = require(join(__dirname, '.', 'interestPaymentCalculations.js'));

// Calculates interest payment proportionality for number of months input by user

printMonthlyPaymentData = (months) => {
    let balances = retrieveMortgageData();
    // EXPECTED VALUE: [['200000,0.003,2000'], ['410000','0.0025',2200']]

    //monthly prints
    for (let i=1; i<= months; i++) {
        console.log(`*** Month${i} ***`);
        for (mortgage of balances) {
            balances[0] -= paymentToInterest();

            console.log("Mortgage " + parseInt(balances.indexOf(mortgage) + 1));
            console.log(`\tRemaining Balance: $"+toDollarFormat(balances[mortgageData.indexOf(mortgage)][0])`);
            console.log(`\tPayment to Principal: $"+toDollarFormat(balances[mortgageData.indexOf(mortgage)][2])`);
            console.log(`\tPayment to Interest: "+ balances[mortgageData.indexOf(mortgage)][1] + ${EOL}`);
        }
    }
};

module.exports = printMonthlyPaymentData;