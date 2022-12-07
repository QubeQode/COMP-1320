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