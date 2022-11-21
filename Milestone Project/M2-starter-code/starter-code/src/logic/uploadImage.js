const path = require('path');
const { rename } = require('fs').promises;
const formidable = require('formidable');

const getFilepathTemplate = (logicElement) => path.join(__dirname, '.', logicElement);

const { loadEJS } = require(getFilepathTemplate('loadPage'));
const { updateDatabase } = require(getFilepathTemplate('manipulateDatabase'));
const { extractUser } = require(getFilepathTemplate('extractUserQuery'));

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

const uploadImage = (request, response) => {
    const inputID = extractUser(request);
    const form = formidable({ multiples: true, uploadDir: path.join('photos', inputID), keepExtensions: true });
    form.parse(request, makeCallback(inputID, request, response));
};

module.exports = uploadImage;
