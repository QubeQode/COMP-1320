// const addCalculator = (num1, num2) => num1 + num2;

// const subtractCalculator = (num1, num2) => num1 - num2;

// const multiplyCalculator = (num1, num2) => num1 * num2;

// // The only differences between our functions is the operator. Combine the three function into one called "Calculator"
// // Capable of adding, subtracting or multiplying
// // Functions in Js are treated the way a value or output are treated in that they can be called on as a parameter

// function calculator(n1, n2, operator) {
//     console.log(operator(n1, n2));
// };

// calculator(5, 4, addCalculator);
// calculator(5, 4, subtractCalculator);
// calculator(5, 4, multiplyCalculator);
// // Given the user the capability to choose what logic is being run on the inputs


// Directly invoking a function:
// const add = (n1, n2) => n1 + n2;

// add(5, 6);

// // Indirectly invoking a function:
// const referenceOne = add; // DO NOT ADD PARENTHESES
// referenceOne(6, 7);

// const referenceTwo = add; // DO NOT ADD PARENTHESES
// referenceTwo(8, 9);

// // If you add parentheses it asks the function to produce a value and define the variable with it
// // Without parentheses you are assigning the function as a **whole** to the variable

// const addTwo = (num1, addFuncRef) => addFuncRef(num1, 2);

// console.log(addTwo(7, add)); //Expect 9
// /* The "addTwo" in this code snippet is a higher order function
//  * This is = a function that is given another function
//  * The "add" function in this code snippet is a callback function
//  * This is = a function that is called on by another function
//  */

// forEach Loop:
// const colors = ["red", "green", "blue"];

// const callback = value => console.log(value);

// colors.forEach(callback); // "forEach" is an example of a higher order function, meaning it requires a callback function

// Iteration 1: takes input "red" and passes it through "callback" printing out "red"
// Iteration 2: takes input "blue" and passes it through "callback" printing out "blue"
// Iteration 3: takes input "green" and passes it through "callback" printing out "green"

// myForEach:
// logic to loop through the array - use a regular for loop
// for each loop you should call the callback function + give the callback function the current element in the array

// const callbackConsole = value => console.log(value);

// const myForEach = (array, callback) => {
//     for (arrIndex = 0; arrIndex <= array.length - 1; arrIndex++) {
//         const item = array[arrIndex];
//         callback(item);
//     }
// };

// myForEach([1, 2, 3, 4], callbackConsole);

// Anonymous functions:
// Nameless function that is plugged in as a parameter
// E.g. function = value => console.log(value);
// myForEach([1, 2, 3, 4], function = value => console.log(value););

// We should use callback functions when we're running a slow piece of code in the background
// Usage of callbacks allows you to run something simultaneously in the forefront

// setTimeout

// setTimeout((input) => console.log(input), 4000); // time is = 4s [1000 = 1 second]

/*
 * Practice Problem: setTimeout + callback functions
 */

// const multiplier = (num1, num2, callback) => {
//     setTimeout(() => {
//         if (typeof num1 != 'number' || typeof num2 != 'number') {
//             callback('You must pass numbers to this function!');
//         } else {
//             callback(null, parseInt(num1) * parseInt(num2));
//         }
//     }, 4000);
// };

// multiplier(5, 5, (err, result) => (err) ? console.log(err) : console.log(result));

// const fs = require("fs"); // built-in Node API - fs = filesystem API

// fs.writeFileSync(""); // Inputs are : 1. name of file to run 2. data we want to write into it

// const content = fs.readFileSync(""); // returns the content of the file and assigns it to variable content

// console.log(content); // returns "buffer" and then numbers as all it is logging is the byte representation

// const contentBetter = fs.readFileSync("", "utf8");

// console.log(contentBetter); // returns the data as text

// fs.writeFile("");
/* Now it's asking us to give: 1. name of the file 2. data we want to write into it 3. callback function
 * Callback function is now looking for an error as a parameter
 * Asynchronous functions = func that can be run in the background
 * Nesting reliant functions allows them to be in the same execution context so they aren't held up by longer code
 */ 