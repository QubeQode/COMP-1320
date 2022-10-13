const { countWords } = require('./countWords');
const fs = require ( 'fs' );

const countWordsInLyrics = (path) => {
    fs.readFile(`${path}`, 'utf-8', (err, data) => {
        if (err) {
            console.log(`The text file you are referencing does not exist.`)
            return;
        }
        const output = countWords(data);
    });
};

countWordsInLyrics('./song.txt');
