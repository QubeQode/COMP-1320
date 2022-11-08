// Question 1

// const process = require('process');
// const { pipeline } = require('stream');
// const rs = process.stdin;
// const ws = process.stdout;

// pipeline (rs, ws, (err) => console.log(err));

// Question 2

// const process = require('process');
// const { pipeline, Transform } = require('stream');

// const rs = process.stdin;
// const ts = new Transform({
//     transform: function (chunk, _, push) {
//         const upperCased = (chunk.toString().toUpperCase());
//         push(null, upperCased);
//     }
// });
// const ws = process.stdout;

// pipeline (
//     rs,
//     ts,
//     ws,
//     (err) => console.log(err)
// );

// Question 3

const { pipeline, Transform } = require('stream');
const { createReadStream } = require('fs');
const csv = require("csvtojson"); // csv -> json
const { createGunzip } = require('zlib'); // g unzip
const rs = createReadStream(`data.csv.gz`)
const ws = process.stdout;
const { filterByCountry } = require('./filter-by-country.js');
const { sumProfit } = require('./sum-profit.js');

pipeline (
    rs,
    createGunzip(),
    csv(),
    filterByCountry('Italy'),
    sumProfit(),
    ws,
    (err) => console.log(err)
);
