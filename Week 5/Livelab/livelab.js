// FINAL QUESTION INVOLVES ASYNCHRONOUS CODE

/*
 * Two types of function:
 * 1. Functions that run quickly
 * 
 * 2. IO bound operations/ CPU bound operations
 *  CPU = massive computational overhead -> solved by multithreading
 *  IO = input/output delay that can't be controlled -> solved by asynchronous code
 *      Talking to a database
 *      Reading/writing a file
 * - An example is some function that must relay w a database in Australia. If there is a 3s delay
 * then nothing else can occur whilst that information relay occurs.
 * - Asynchronous version of these functions lets them run in the background
 * 
 * 
 * Choice is whether to take adv of asynchronous or stick to synchronous?
 * 
 * Asynchronous:
 * - run in the background
 * - harder to read
 * - harder to write
 * 
 * Synchronous:
 * - Easy to write + read
 * - Cannot run in the background
 * 
 * When calling on a function it is the OS that performs the task. So when the OS is performing the
 * task, Node is simply inert and waiting for a response. Asynchronous code allows it to perform
 * other tasks whilst the OS is busy.
 * 
 * asyncFunc(params, (err) => {
 *  if (err) {
 *      //deal with error
 *  } else {
 *      asyncFunc2(params, (err) => {
 *      })
 *  }
 * })
 *
 * Above code can be chained endlessly
 * 
 * Issues:
 * - Nesting is hard to read
 * - No centralized error handling
 * 
 * Centralized Error Handling:
 * - A singular space to deal with any/all errors in inputs
 * - In async every error clause must be handled 1 by 1
 * 
 * Promises:
 * 
 * new Promise ((resolve, reject) => {})
 * Produces an object called promise object
 * 3 Keys
 * Prototype : 
 * promiseState : pending / fulfilled / rejected
 * promiseResult : //content of the output / the error message
 * 
 * The values for this object will naturally change over time
 * Resolve + reject let you change the values for the "PromiseState" key
 * 
 * const promise = new Promise((resolve, reject) => {
    if (nameFromUserInput = nameWeAreLookingFor) {
        resolve("The names match!");
    } else {
        reject(new Error("The name does not match"));
    }
});
 * 
 * As soon as the resolve function is called the state key's value is changed to "fulfilled"
 * The message the function is wrapping is returned
 * Looks for a promise.then() function:
 * 
 * promise.then((msg) => console.log(msg));
 * 
 * As soon as the reject function is called the state key's value is changed to "rejected"
 * The message the function is wrapping is returned
 * Looks for a promise.catch() function:
 * 
 * promise.catch((err) => console.log(err));
 * 
 */

// Live example of promise:

// const getName = () => {
//     return new Promise((resolve, reject) => {
//         if (nameFromUserInput = nameWeAreLookingFor) {
//             resolve("The names match!");
//         } else {
//             reject(new Error("The name does not match"));
//         }
//     });
// };

// getName()
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err));

// The reason this works is because every time we have a ".then" it returns the ORIGINAL PROMISE
// OBJECT and not undefined. 

// So the first step resolves to promiseObject.catch((err) => console.log(err));


// Node js promise function that parses through four files and prints the content of the last:

const fs = require( 'fs' );

const readFileP = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) =>{
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

readFileP('file1.txt')
    .then((file2) => readFileP(file2))
    .then((file3) => readFileP(file3))
    .then((file4) => readFileP(file4))
    .then((finalContent) => console.log(finalContent))
    .catch((err) => console.log(err));
        