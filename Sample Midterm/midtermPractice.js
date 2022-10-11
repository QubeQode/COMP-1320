var person = { name: 'Sarah', height: '6 feet', age: 22 };

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

if (!("eyeColor" in person)) {
    console.log(`Missing Key`);
}

/*
 * Q12.7 -
 */

for (qualities in person) {
    console.log(`${qualities}: ${person[`${qualities}`]}`);
}

/*
 * Q12.8 -
 */

console.log(Object.keys(person));

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

const readline = require( 'readline-sync' );

const login = { username: `qubeqode`, password: `codedqubes`};

const inputUsername = readline.question(`What is your username? `);

const authenticatePassword = (object) => {
    for (let attempts = 0; attempts < 3; attempts++) {
        const inputPassword = readline.question(`Input password for ${inputUsername}: `);
        if (inputPassword === object.password) {
            console.log(`You may access your account.`);
            return;
        }
    }
    console.log(`You have tried too many times.`)
    return;
};

authenticatePassword(login);

/*
 * -Repeat question-
 * 1. function that intakes a string and converts every second word to full uppercase
 * 
 * -Ask + Clarify-
 * 
 * How will we find every second word?
 * Will need to seperate words into unique data points/strings and act on every other seperated string
 * 
 * How will we capitalize words?
 * .toUpperCase()
 * 
 * -Explain using data-
 * 
 * -> 'fur pillows are hard to sleep on'
 * 1. computer splits the given string into multiple strings, each one a single word long
 * 2. computer iterates through the multiple strings focusing on odd index values
 * 3. for each odd index value the computer converts the string into uppercase
 * 4. the computer then concatenates the regular strings + uppercase strings in the same order as the initial input
 * -> 'fur PILLOWS are HARD to SLEEP on'
 * 
 * -Outline pseudocode-
 * 
 * 
 * 
 * -Refactor into code-
 * 
 * 
 */