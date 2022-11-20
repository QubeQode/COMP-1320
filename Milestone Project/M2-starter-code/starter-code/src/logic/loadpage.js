const { readFile } = require('fs').promises
const ejs = require('ejs');

const loadPage = (filepath, response) => {
    return readFile(filepath, 'utf-8')
        .then((data) => response.end(data))
        .catch((err) => console.error(err))
}

const loadEJS = (filepath, ejsObject, response) => {
    return readFile(filepath, 'utf-8')
        .then((data) => {
            const renderedHTML = ejs.render(data, ejsObject);
            response.end(renderedHTML);
        })
        .catch((err) => console.error(err))
}

module.exports = { loadPage, loadEJS };
