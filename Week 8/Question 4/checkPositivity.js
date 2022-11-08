const { Transform } = require('stream');
const { readFileSync } = require('fs');

const afinn = JSON.parse(readFileSync('./AFINN.ndjson')); // afinn is a string turned to object

const checkPositivity = () => {
    return new Transform ({
        objectMode: true, // object mode = expects to receive objects
        transform: function(chunk, _, push) {
            let currentReview = chunk.reviewText.split(" "); // reviewText is a string turned to array
            let positivity = 0; // numerical value by default
            for (word of currentReview) {
                for (metric in afinn) {
                    if (word === metric) { // string equating to a string, this is fine
                        positivity += parseInt(afinn[metric]); // afinn.metric is a string, to do addition we need an integer
                    }
                }
            }
            chunk['positivitySum'] = positivity;
            push(null, chunk);
        }
    });
};

module.exports = { checkPositivity };