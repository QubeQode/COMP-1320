// 1. undeclared variable that is logged

let age;
console.log(age);

// 2. Change price to taxed price func

const TAX = 1.8;
let shopPrice = "$20.50";

const customerPrice = (value) => {
    const dollarAmount = parseFloat(value.replace('$', ''));
    const finalCost = (dollarAmount * TAX).toFixed(2);
    return `$${finalCost}`;
};

console.log(customerPrice(shopPrice));

// 3. Season message with conditional output func

let season = 'winter';

const seasonsGreetings = (season === 'summer') ? `It's ${season}!` : `It is ${season}.`;

const printSeasonsGreetings = (season) => { console.log(seasonsGreetings); };

printSeasonsGreetings(season);

// 4. Only log colors that end in "e" func

colors = ['Red', 'Orange', 'Green', 'Blue', 'Purple'];


for (color of colors) {
    if (color[color.length - 1] === 'e') {
        console.log(color);
    }
};

// 5. List of temperatures
var listOfTempOrMoney = ["13c", "30f", "45f", "40c", "$30.32", "$65.99"];

/*
 * -Repeat question-
 *
 * 1. Function that iterates through provided array
 * 2. If value ends with 'f' prints 'it is fahrenheit'
 * 3. If value ends with 'c' prints 'it is celcius'
 * 4. If neither it multiplies dollar value by 1.8 and prints new dollar value
 * 
 * -Ask + Clarify-
 * 
 * How will I detach + reintegrate the dollar sign?
 * parseFloat(item.replace('$', ''));
 * `$${finalCost}`;
 * 
 * How will I deal with temperatures potentially having more than 3 values?
 * array.length - 1 = index of lastCharacter
 * 
 * How will I deal with 3 conditions?
 * If (lastCharacter === 'c') {// log celcius}
 * Else If (lastCharacter === 'f') {// log fahrenheit}
 * Else {// update price and log}
 * 
 * -Explain using data-
 * item = '13c' -> lastCharacter === 'c' -> log celcius
 * item = '30f' -> lastCharacter === 'f' -> log fahrenheit
 * item = '$30.32' -> neither of above -> log $(30.32 * 1.8)
 * 
 * -Outline pseudocode-
 * 
 * const processItem = (array) => {
 *  lastCharacter = string[string.length - 1]
 *  if (lastCharacter === 'c') {}
 *      // log celcius
 *  } else if (lastCharacter === 'f') {
 *      //log fahrenheit  
 *  } else {
 *      // log $ + (priceMinusDollar * 1.8)
 *  }
 * };
 * 
 * -Refactor into code-
 */

const processItems = (array) => {
    for (item of listOfTempOrMoney) {
        const LAST_CHARACTER = item[item.length - 1];
        if (LAST_CHARACTER === 'c') {
            console.log(`It is celcius.`);
        } else if (LAST_CHARACTER === 'f') {
            console.log (`It is fahrenheit`)  
        } else {
            const dollarAmount = parseFloat(item.replace('$', ''));
            const finalCost = (dollarAmount * TAX).toFixed(2);
            console.log(`$${finalCost}`);
        }
    }
};

processItems(listOfTempOrMoney);

// Function that can print a name and a greeting

/*
 * -Repeat question-
 *
 * 1. Function that accepts a name and greeting as arguments
 * 2. combines the name and greeting as an output message
 * 
 * -Ask + Clarify-
 * 
 * No clarifying questions
 * 
 * -Explain using data-
 * 
 * hello('Gus', 'How are you?') -> Hello Gus! How are you?
 * hello('Fred', 'How's it going?1) -> Hello Fred! How's it going?
 * 
 * -Outline pseudocode-
 * 
 * const hello = (name, greeting) => { console.log(`Hello ${name}! ${greeting}); };
 * 
 * -Refactor into code-
 */

const hello = (name, greeting) => { console.log(`Hello ${name}! ${greeting}`); };

hello(`Armaan`, `Have you thought about skipping the midterm?`);

// Function that can calculate the area of any rectangle

/*
 * -Repeat question-
 *
 * 1. calculateArea takes the parameters 'width' + 'length' and returns the 'area'
 * 2. calculateArea does not accept negative values outputs 'You cannot use negative numbers!'
 * 3. calculateArea does not accept strings outputs 'You must use numbers!'
 * 
 * -Ask + Clarify-
 * 
 * How do I calculate area?
 * length * width = area
 * 
 * How do I check the input type?
 * typeof 'length'
 * typeof 'width'
 * 
 * How do I check if -ve or +ve?
 * if 'length' < 0 || 'width' < 0 
 * 
 * -Explain using data-
 * 
 * calculateArea(3, 2) -> 3 * 2 = 6
 * calculateArea(-3, 1) -> -3 < 0 -> 'You cannot use negative numbers!'
 * calculateArea(3, -1) -> -1 < 0 -> 'You cannot use negative numbers!'
 * calculateArea(3, 'Hi there!') -> typeof 'Hi there' != number -> 'You must use numbers!'
 * calculateArea('Hi there!', 3) -> typeof 'Hi there' != number -> 'You must use numbers!'
 * 
 * -Outline pseudocode-
 * 
 * calculateArea = (length, width) => {
 *  if (length < 0 || width < 0) {
 *      console.log(`You cannot use negative numbers!`)
 *  }
 *  if (typeof length !== number || typeof width !== number) {
 *      console.log(`You must use numbers!`)
 *  }
 *  console.log(length * width);
 * }
 * 
 * -Refactor into code-
 */

calculateArea = (length, width) => {
    if (length < 0 || width < 0) {
        console.log(`You cannot use negative numbers!`)
        return;
    }
    if (typeof length !== 'number' || typeof width !== 'number') {
        console.log(`You must use numbers!`)
        return;
    }
        console.log(length * width);
};

calculateArea(5, 3);
calculateArea(10, 4);
calculateArea(40, 10);
calculateArea(`Hello`, 3);
calculateArea(-1, 5);
calculateArea(-5, 1);
calculateArea(1, `Hello`);

// Func that logs age and name of inputs as a string

/*
 * -Repeat question-
 *
 * 1. Function takes parameters of age and name and passes them through helper functions
 * 2. Function logs `Hello my name is ${name}. I am ${yourAge} years old.`
 * 3. Function should only accept a string for name, otherwise log `Try again with a real name this time.`
 * 4. Function should only accept a number or string for age, otherwise log `That isn't an age.`
 * 5. Function should not accept age values over 110, log `Are you sure you aren't dead?`
 * 
 * -Ask + Clarify-
 * 
 * Is there a way to discount data entry of numerical digits in a string?
 * Could use const name = name.replace(/\d+/g, '');
 * Moves forward without any numerical additions. Prints no name if all it got was numbers in a string.
 * 
 * -Explain using data-
 * 
 * function(Moh, 25) -> `Hello my name is Moh. I am 26 years old.`
 * function(4378, 16) -> typeof 4378 !== string -> `Try again with a real name this time.`
 * function('Abby6', 19) -> Abby6.replace(/\d+/g, '') -> Abby -> `Hello... Abby...'
 * function(Charles, 115) -> 115 > 110 -> 'Are you sure you aren't dead?`
 * function(Guisseppe, 'twenty two') -> `Hello... I am twenty two years old.`
 * 
 * -Outline pseudocode-
 * 
 * 
 * 
 * -Refactor into code-
 */