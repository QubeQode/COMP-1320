const { Transform } = require('stream');

const filterByCountry = (country) => {
    return new Transform({
        objectMode: true,
        transform: function (chunk, _, push) {
            const object = JSON.parse(chunk);
            if (object.country === country) {
                push(null, chunk);
            } else {
                push(null);
            }
        }
    });
};

module.exports = { filterByCountry };