const { Transform } = require('stream');

let totalProfit = 0;

const sumProfit = () => {
    return new Transform({
        objectMode: true,
        transform: function (chunk, _, push) {
            const object = JSON.parse(chunk);
            totalProfit += parseFloat(object.profit);
            push(null);
        },
        flush: function (push) {
            push(null, String(totalProfit));
        }
    });
};

module.exports = { sumProfit };