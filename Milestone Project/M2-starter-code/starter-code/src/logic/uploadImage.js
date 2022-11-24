const path = require('path');
const { rename } = require('fs').promises;
const formidable = require('formidable');

const getFilepathTemplate = (logicElement) => path.join(__dirname, '.', logicElement);

const { loadEJS } = require(getFilepathTemplate('loadPage'));
const { updateDatabase } = require(getFilepathTemplate('manipulateDatabase'));
const extractQueryParams = require(getFilepathTemplate('extractUserQuery'));

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
    const serverFilePath = path.join(__dirname, '..', 'photos', inputID, originalFilename);

    rename(path.join(__dirname, '..', 'photos', inputID, newFilename), serverFilePath)
        .then(() => updateDatabase(inputID, request, originalFilename))
        .then(() => loadEJS(path.join(__dirname, '..', 'views', 'upload.ejs'), { isSuccess: true }, response))
        .catch(err => sendErrorResponse(err, response));
};

const uploadImage = (request, response) => {
    const inputID = extractQueryParams(request).username;
    const form = formidable({ multiples: true, uploadDir: path.join('src', 'photos', inputID), keepExtensions: true });
    form.parse(request, makeCallback(inputID, request, response));
};

module.exports = uploadImage;
