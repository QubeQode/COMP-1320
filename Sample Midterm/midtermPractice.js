// var person = { name: 'Sarah', height: '6 feet', age: 22 };

/*
 * Q12.1 - The keys are name, height and age
 * 
 * Q12.2 - 
 * console.log(person.name);
 * console.log(person['name']);
 * 
 * Q12.3 - person.hairColor = 'black';
 *
 * Q12.4 - person.hairColor = 'brown';
 * 
 * Q12.5 - delete person.height;
 * 
 * Q12.6 -
 */

// if (!("eyeColor" in person)) {
//     console.log(`Missing Key`);
// }

/*
 * Q12.7 -
 */

// for (qualities in person) {
//     console.log(`${qualities}: ${person[`${qualities}`]}`);
// }

/*
 * Q12.8 -
 */

// console.log(Object.keys(person));

/*
 * -Repeat question-
 * 1. Array called securityQuestions with key: value "question" + "expected answer"
 * 2. securityQuestions has three objects
 *  e.g { question: "What was your first pet's name?", expectedAnswer: "coco" },
 * 3. Write code that does the following:
 *  - readlineSync to ask user each question in securityQuestions array
 *  - check if user response matches object information
 *  - if matches move to next question
 *  - if not stop asking questions and log message "Invalid response, please try again later"
 *  - if succesfully answers all questions print "Success. You may now access your account"
 * 
 * 
 * -Ask + Clarify-
 * 
 * No clarifying questions
 * 
 * -Explain using data-
 * 
 * readlineSync -> "What is your first pet's name?"
 * 
 * If user input in response matches securityQuestions.expectedAnswer move to next question
 * 
 * If user input doesn't match securityQuestions.expectedAnswer -> "Invalid response, please try again later"
 * 
 * Process repeated with question 2 and 3
 * 
 * If successful on all 3 -> "Success. You may now access your account"
 * 
 * -Outline pseudocode-
 * 
 * const securityQuestions = [
 *  {
 *      question: 'What was your first cat's name?',
 *      expectedAnswer: 'El Dorado',
 *  },
 *  {
 *      question: 'What city were you born in?',
 *      expectedAnswer: 'El Dorado',
 *  },
 *  {
 *      question: 'What is your favorite mythical city?',
 *      expectedAnswer: 'El Dorado',
 *  },
 * ];
 * 
 * const readline = require{ 'readlineSync' }
 * 
 * const authenticateUser = (securityQuestions) -> {
 *  for (question of securityQuestions) {
 *      const givenAnswer = readline.question(`${securityQuestions[question].question}`);
 *      if (givenAnswer !== securityQuestions[question].expectedAnswer) {
 *          console.log(`Invalid response, please try again later.`)
 *          return;
 *      }
 *  }
 *  console.log(`Success. You may now access your account`);
 *  return;
 * }
 * 
 * -Refactor into code-
 */

// const securityQuestions = [
//  {
//      question: `What was your first cat's name?`,
//      expectedAnswer: 'El Dorado',
//  },
//  {
//      question: 'What city were you born in?',
//      expectedAnswer: 'El Dorado',
//  },
//  {
//      question: 'What is your favorite mythical city?',
//      expectedAnswer: 'El Dorado',
//  },
// ];

// const readline = require( 'readline-sync' );

// const authenticateUser = (securityQuestions) => {
//  for (question in securityQuestions) {
//      const givenAnswer = readline.question(`${securityQuestions[question].question} `);
//      if (givenAnswer !== securityQuestions[question].expectedAnswer) {
//          console.log(`Invalid response, please try again later.`)
//          return;
//      }
//  }
//  console.log(`Success. You may now access your account`);
//  return;
// };

// authenticateUser(securityQuestions);

/*
 * -Repeat question-
 * 1. Create object called 'login' with key: value username and password
 * 2. Import readline-sync so that user must input username and password in terminal
 * 3. Message requesting password must include the answer to question asking for username
 * 4. Check if the password entered into 'login' matches given password
 * 5. If matches then log 'You may access your account' and end the program
 * 6. If does not match allow user to retry three times
 *  - if they fail thrice log 'You have tried too many times' and end the program
 * 
 * 
 * -Ask + Clarify-
 * 
 * 
 * 
 * -Explain using data-
 * 
 * - const login = { username: inputUsername, password: inputPassword};
 * - readline-sync redefined to inputUsername after username is asked for
 * - readline-sync incorporates inputUsername into message requesting password
 * - if inputPassword === login.password -> 'You may access your account'
 * - otherwise computer reasks the question, two more times
 * - if inputPassword !=== login.password on 3rd try -> 'You have tried too many times'
 * 
 * -Outline pseudocode-
 * 
 * const readline = require( 'readline-sync' );
 * 
 * const login = { username: qubeqode, password: codedqubes};
 * 
 * const requestPasswordString = readline.question(`Input password for ${inputUsername}: `)
 * 
 * const authenticateLogin = (object) => {
 *  const inputUsername = readline.question(`What is your username? `);
 *  let inputPassword = requestPasswordString;
 *  if (inputPassword !== object.password) {
 *      inputPassword = requestPasswordString;
 *  }
 *  console.log(`You may access your account`);
 *  return;
 * };
 * 
 * -Refactor into code-
 */

// const readline = require( 'readline-sync' );

// const login = { username: `qubeqode`, password: `codedqubes`};

// const inputUsername = readline.question(`What is your username? `);

// const authenticatePassword = (object) => {
//     for (let attempts = 0; attempts < 3; attempts++) {
//         const inputPassword = readline.question(`Input password for ${inputUsername}: `);
//         if (inputPassword === object.password) {
//             console.log(`You may access your account.`);
//             return;
//         }
//     }
//     console.log(`You have tried too many times.`)
//     return;
// };

// authenticatePassword(login);

/*
 * -Repeat question-
 * 1. function that intakes a string and converts every second word to full uppercase
 * 
 * -Ask + Clarify-
 * 
 * How will we find every second word?
 * Will need to seperate words into unique data points/strings and act on every other seperated string
 * array.Split(" ");
 * 
 * How will we uppercase words?
 * .toUpperCase()
 * 
 * How will we iterate through?
 * for(word of array)
 * 
 * How will we find the odd words?
 * array[word] % 2 !== 0
 * 
 * How will we rejoin the words to form a sentence?
 * array.join(' ')
 * 
 * How will we update the value for uppercased words?
 * array[word] = array[word].toUpperCase()
 * 
 * -Explain using data-
 * 
 * -> 'fur pillows are hard to sleep on'
 * 1. computer splits the given string into multiple strings, each one a single word long
 * 2. computer iterates through the multiple strings focusing on odd index values
 * 3. for each odd index value the computer converts the string into uppercase
 * 4. the computer then concatenates the regular strings + uppercase strings in the same order as the initial input
 * -> 'furPILLOWSareHARDtoSLEEPon'
 * 
 * -Outline pseudocode-
 * 
 * inputArray = ['Some', 'data', 'here.']
 * 
 * const uppercaseOddWords = (array) => {
 *  for (word of array) {
 *      if (typeof word !== string) {
 *          array[word] = word.toString();
 *      }
 *      const oddOrEvenIndicator = array[word] % 2;
 *      if (oddOrEvenIndicator !== 0) {
 *          array[word] = array[word].toUpperCase();
 *      }
 *  }
 *  array.join(' ');
 * }
 * 
 * -Refactor into code-
 */

// inputString = 'fur pillows are hard to actually sleep on'

// const upperCamelCaseString = (string) => {
//     const convertedArray = string.split(' ');
//     for (word of convertedArray) {
//         const wordIndex = convertedArray.indexOf(word);
//         if ((wordIndex % 2) !== 0) {
//             convertedArray[wordIndex] = word.toUpperCase();
//         }
//     }
//     const outputString = convertedArray.join('');
//     console.log(outputString);
// };

// upperCamelCaseString(inputString);

/*
 * -Repeat question-
 * 
 * 1. Function recieves an ARRAY of words and returns an OBJECT
 *  - Key: Value - word: # times said
 * 
 * -Ask + Clarify-
 * 
 * How will we tally through the array without iterating more than once?
 * 
 * How will we add items to an object?
 * object['key'] = value
 * 
 * 
 * 
 * -Explain using data-
 * 
 * "buy it use it break it fix it trash it change it mail upgrade it"
 * computer sees buy, adds to tally for buy
 * sees it adds to tally moves on
 * use, it, break etc...
 * computer generates an object with the key:value word:tally
 * {buy: 1, it: 7...}
 * 
 * -Outline pseudocode-
 * 
 * inputString = 'buy it use it break it fix it trash it change it mail upgrade it'
 * 
 * const countWordRepetitions = (string) => {
 *  
 * }
 * 
 * -Refactor into code-
 */

// inputString = 'buy it use it break it fix it trash it change it mail upgrade it';

// const countWords = (string) => {
//     let outputObject = {};
//     for (word of string.split(' ')) {
//         if (word in outputObject) {
//             let priorValue = outputObject[word];
//             priorValue += 1;
//             outputObject[word] = priorValue;
//         } else {
//             outputObject[word] = 1;
//         }
//     }
//     console.log(outputObject);
// };

// countWords(inputString);

/*
 * -Repeat question-
 * 
 * Function accepts an array of words as an input
 * Function returns an object
 * Key: value -> word: [array of indices it appears]
 * 
 * 
 * -Ask + Clarify-
 * 
 * 
 * 
 * -Explain using data-
 * 
 * const input = ["buy", "it", "fix", "it", "sell", "it"];
 * Computer iterates through the words 1 by 1
 * Sees "buy" -> creates an array and pushes index value of word as first item
 * Sees "it" -> creates an array and pushes index value of word as first item
 * Sees "fix" -> creates an array and pushes index value of word as first item
 * Sees "it" -> adds the index value to the end of the pre-existing array for it
 * .....
 * output -> { buy: [0], it: [1, 3, 5], ....}
 * 
 * -Outline pseudocode-
 * 
 * const wordIndexes = (array) => {
 *  outputObject = {}
 *  for (word of array) {
 *      if (word in outputObject) {
 *          //add index to end of array for value matching key in object
 *      } else {
 *          //create new object key defined as array with index of value
 *      }
 *  }
 * };
 * 
 * -Refactor into code-
 */

// const input = [
//     "buy",
//     "it",
//     "use",
//     "it",
//     "break",
//     "it",
//     "fix",
//     "it",
//     "trash",
//     "it",
//     "change",
//     "it",
//     "mail",
//     "upgrade",
//     "it",
//   ];
  
  
// const wordPosition = (array) => {  
//     let outputObject = {};
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] in outputObject) {
//             outputObject[array[index]].push(index);
//         } else {
//             outputObject[array[index]] = [index];
//         }
//     }
//     console.log(outputObject);
// };

// wordPosition(input);

/*
 * -Repeat question-
 * 
 * 
 * 
 * -Ask + Clarify-
 * 
 * 
 * 
 * -Explain using data-
 * 
 * 
 * 
 * -Outline pseudocode-
 * 
 * 
 * 
 * -Refactor into code-
 * 
 * 
 */