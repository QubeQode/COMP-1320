// read data and filter out spam reviews
// cut the string up into words
// compare the words against AFINN json
// append the value derived onto the bottom of object
// use sortstream module to compare positivity vals
// sort by positivity value (least -> most)
// write to file called "filteredData.ndjson"

const ndjson = require('ndjson');
const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream');
const sort  = require("sort-stream2");
const rs = createReadStream('./sampleDataSet.ndjson');
const ws = createWriteStream('./filteredData.ndjson');
const { filterSpam } = require('./filterSpam.js');
const { checkPositivity } = require('./checkPositivity.js');

pipeline (
    rs,
    ndjson.parse(),
    filterSpam(),
    checkPositivity(),
    sort(function(chunk1, chunk2) { 
        return chunk1.positivitySum - chunk2.positivitySum; 
    }),
    ndjson.stringify(),
    ws,
    (err) => console.log(err)
);
