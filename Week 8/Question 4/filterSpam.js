const { Transform } = require('stream');

const filterSpam = () => {
    return new Transform ({
        objectMode: true,
        transform: function(chunk, _, push) {
            if (chunk.class === 0) {
                push(null, chunk);
            } else {
                push(null);
            }
        }
    });
};

module.exports = { filterSpam };