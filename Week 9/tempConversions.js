const fahrenheitToCelsius = number => {
    const fahrenheitVal = Math.round((number*1.8) + 32);
    const fahrenheitMessage = number + " degrees celsius is " + fahrenheitVal +
      " degrees fahrenheit";
    return fahrenheitMessage;
};

const celsiusToFahrenheit = number => {
    const celsiusVal = Math.round((number - 32) * 0.5556);
    const celsiusMessage = number + " degrees fahrenheit is " + celsiusVal +
      " degrees celsius";
    return (celsiusMessage);
};

module.exports = { fahrenheitToCelsius, celsiusToFahrenheit };
