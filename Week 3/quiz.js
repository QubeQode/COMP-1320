/*
 * We need a function that prints hashtags in the shape of a sail
 * Iteration 1: 7 spaces + 1 hashtag
 * Iteration 2: 6 spaces + 2 hashtags
 * So on and so forth
 */

/*
 * 1 loop = row
 * 2 loop = characters of the row
 */
// userInput = parseInt

// const printSail = (height) => {
//     for (let row = 0; row <= height - 1; row++) {
//         if (height === 1) {
//             console.log('#');
//         }
//         if (height === 2) {
//             console.log('#');
//             console.log('##');
//         }
//         for (let indent = height - 2; indent >= 0; indent--) {
//             let a = '.'.repeat(indent);
//             for (let i = 1; i <= height; i++) {
//                 let b = '#'.repeat(i);
//                 console.log(a + b);
//             }  
//         }
//     }
// };

// printSail(4);

const process = require('process');

const height = 8;

const reworkedRightSail = (height) => {
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= row; col++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
};

reworkedRightSail(height);

const reworkedLeftSail = (height) => {
    for (let row = 0; row < height; row++) {
        for (let space = 0; space < height - row - 1; space++)
            process.stdout.write(' ');
        for (let col = 0; col <= row; col++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
};

reworkedLeftSail(height);
//calculate spaces by doing height - row - 1
// -1 comes from the diff in index between dec counting and index counting