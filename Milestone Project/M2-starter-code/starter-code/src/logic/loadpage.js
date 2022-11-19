const { readFile } = require('fs').promises

const loadPage = (filepath, response) => {
    return readFile(filepath, 'utf-8')
            .then((data) => response.end(data));
};

module.exports = loadPage;
