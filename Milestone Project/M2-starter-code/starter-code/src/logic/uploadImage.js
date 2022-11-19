const path = require('path');
const { readFile, rename, writeFile } = require('fs').promises;
const formidable = require('formidable');
const url = require('url');
const { EOL } = require('os');

const sendErrorResponse = (err, response) => {
    response.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
    response.end(String(err));
};

/**
 * Higher order factory function that returns callback.
 *   - Callback has access to factory parameters
 */
const makeCallback = (request, response) => (err, fields, files) => {
    if (err) {
        sendErrorResponse(err, response);
        return;
    }
    const { newFilename, originalFilename }  = files.uploadJohn;
    rename(path.join(__dirname, '..', 'photos', newFilename), path.join(__dirname, '..', 'photos', originalFilename))
        .then(() => updateDatabase(request, originalFilename))
        .catch(err => sendErrorResponse(err, response));
};

const updateDatabase = (request, originalFileName) => {
    const URL = url.parse(request.url);
    const sliceStart = (URL.query.indexOf('=')) + 1;
    const inputID = URL.query.slice(sliceStart, (URL.query.length));
    const filePath = path.join(__dirname, '..', '..', 'database', 'data.json');

    readFile(filePath)
        .then(data => {
            const databaseObject = JSON.parse(data);
            for (let index in databaseObject) {
                if (databaseObject[index].username === inputID) {
                    databaseObject[index].photos.push(originalFileName);
                    databaseObject[index].stats.posts = databaseObject[index].photos.length;
                    const writableObject = JSON.stringify(databaseObject);
                    const readableObject = writableObject.replaceAll(',', `,${EOL}`);
                    return writeFile(filePath, readableObject);
                }
            }
        });
};

const uploadImage = (request, response) => {
    const form = formidable({ multiples: true, uploadDir: 'photos', keepExtensions: true });
    form.parse(request, makeCallback(request, response));
};

module.exports = uploadImage;

// const form = formidable({multiples: true, uploadDir: `${__dirname}/photos`, keepExtensions: true,});

    // form.parse(request, (err, fields, files) => {
    //     if (err) {
    //         response.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
    //         response.end(String(err));
    //     return;
    //     }
    //     const originalFileName = files. uploadJohn.originalFilename;
    //     const newFileName = files.uploadJohn.newFilename;

    //     rename(`${__dirname}/photos/${newFileName}`, `${__dirname}/photos/${originalFileName}`)
    //     .then(() => {
    //         const Url = (url.parse(request.url));
    //         const startPoint = Url.query.indexOf('=');
    //         const inputID = Url.query.slice((startPoint + 1), (Url.query.length));

    //         readFile(path.join(__dirname, "..", "database", "data.json"), 'utf-8')
    //             .then((data) => {const databaseObject = JSON.parse(data); return databaseObject;})
    //             .then((databaseObject) => {
    //                 for (let index in databaseObject) {
    //                     if (databaseObject[index].username === inputID) {
    //                         databaseObject[index].photos.push(originalFileName);
    //                         databaseObject[index].stats.posts = databaseObject[index].photos.length;

    //                         const writableObject = JSON.stringify(databaseObject);
    //                         const readableObject = writableObject.replaceAll(',', `,${EOL}`);
    //                         writeFile(path.join(__dirname, "..", "database", "data.json"), readableObject);
    //                         return;
    //                     }
    //                 }
    //             })
    //             .catch((err) => console.error(err));
    //     })
    // });