const path = require('path');
const { rename } = require('fs').promises;
const formidable = require('formidable');

const getLogicTemplate = (logicElement) => path.join(__dirname, '.', logicElement);

const { loadEJS } = require(getLogicTemplate('loadPage'));
const { updateDatabase, getNewImgFilepath } = require(getLogicTemplate('manipulateDatabase'));
const extractQueryParams = require(getLogicTemplate('extractUserQuery'));
const getInstance = require(path.join(__dirname, '..', 'io'));

const io = getInstance();

const sendSocketEvent = (inputID, originalFileName) => {
    var imagePath = getNewImgFilepath(inputID, originalFileName);
    io.emit('newImage', imagePath);
};

const sendErrorResponse = (err, response) => {
    response.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
    loadEJS(path.join(__dirname, '..', 'views', 'upload.ejs'), { isSuccess: false }, response);
};

/**
 * Higher order factory function that returns callback.
 *   - Callback has access to factory parameters
 * @param inputID Name of account assosciated with upload
 * @param request Browser request information
 * @param response http server response variable
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
        .then(() => sendSocketEvent(inputID, originalFilename))
        .catch(err => sendErrorResponse(err, response));
};

const uploadImage = (request, response) => {
    const inputID = extractQueryParams(request).username;
    const form = formidable({ multiples: true, uploadDir: path.join('src', 'photos', inputID), keepExtensions: true });
    form.parse(request, makeCallback(inputID, request, response));
};

module.exports = uploadImage;
