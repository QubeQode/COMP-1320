const countWords = (string) => {
    let outputObject = {};
    for (word of string.split(' ')) {
        if (word in outputObject) {
            let priorValue = outputObject[word];
            priorValue += 1;
            outputObject[word] = priorValue;
        } else {
            outputObject[word] = 1;
        }
    }
    console.log(outputObject);
};

module.exports = { countWords };