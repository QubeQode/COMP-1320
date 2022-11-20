const path = require('path');
const { readFile, rename, writeFile } = require('fs').promises;
const formidable = require('formidable');
const url = require('url');
const { EOL } = require('os');
const { loadEJS } = require(path.join(__dirname, '.', 'loadpage'));

const extractUser = (request) => {
    const URL = url.parse(request.url);
    const sliceStart = (URL.query.indexOf('=')) + 1;
    return URL.query.slice(sliceStart, (URL.query.length));
};

const sendErrorResponse = (err, response) => {
    response.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
    loadEJS(path.join(__dirname, '..', 'views', 'upload.ejs'), { isSuccess: false }, response);
};

/**
 * Higher order factory function that returns callback.
 *   - Callback has access to factory parameters
 */
const makeCallback = (inputID, request, response) => (err, fields, files) => {
    if (err) {
        sendErrorResponse(err, response);
        return;
    }
    const { newFilename, originalFilename }  = files[inputID];

    rename(path.join(__dirname, '..', 'photos', inputID, newFilename), path.join(__dirname, '..', 'photos', inputID, originalFilename))
        .then(() => updateDatabase(inputID, request, originalFilename))
        .then(() => loadEJS(path.join(__dirname, '..', 'views', 'upload.ejs'), { isSuccess: true }, response))
        .catch(err => sendErrorResponse(err, response));
};

const updateDatabase = (inputID, request, originalFileName) => {
    const filepath = path.join(__dirname, '..', '..', 'database', 'data.json');

    readFile(filepath)
        .then(data => {
            const databaseObject = JSON.parse(data);
            for (let index in databaseObject) {
                if (databaseObject[index].username === inputID) {
                    databaseObject[index].photos.push(originalFileName);
                    databaseObject[index].stats.posts = databaseObject[index].photos.length;
                    const writableObject = (JSON.stringify(databaseObject)).replaceAll(',', `,${EOL}`);
                    writeFile(filepath, writableObject);
                    break;
                }
            }
        });
};

const uploadImage = (request, response) => {
    const inputID = extractUser(request);
    const form = formidable({ multiples: true, uploadDir: path.join('photos', inputID), keepExtensions: true });
    form.parse(request, makeCallback(inputID, request, response));
};

module.exports = uploadImage;
