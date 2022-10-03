const readline = require( 'readline-sync' );

const height = readline.questionInt('What height sail do you want?' );

const reworkedDoubleSail = (height) => {
    for (let row = 0; row < height; row++) {
        for (let space = 0; space < height - row - 1; space++) {
            process.stdout.write(' ');
        }
        for (let col = 0; col <= row; col++) {
            process.stdout.write('#');
        }
        process.stdout.write('  ');
        for (let col = 0; col <= row; col++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
};

reworkedDoubleSail(height);

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