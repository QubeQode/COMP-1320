const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const { EOL } = require('os');

const extractQueryParams = require(path.join(__dirname, 'extractUserQuery'));

extractJSONObject = () => {
    return readFile(path.join(__dirname, '..', '..', 'database', 'data.json'))
        .then(data => {
            const databaseObject = JSON.parse(data);
            return databaseObject;
        });
};

getUsernames = () => {
    return extractJSONObject()
        .then(databaseObject => {
            const existingUsernames = [];
            for (let index in databaseObject) {
                existingUsernames.push(databaseObject[index].username);
            }
            return existingUsernames;
        })
        .catch(err => console.error(err));
};

getFeedObject = (request) => {
    return extractJSONObject()
        .then(databaseObject => {
            let inputID = extractQueryParams(request).username;
            let userObject;
            databaseObject.forEach(value => {
                if (value.username === inputID) {
                    userObject = value;
                }
            })
            return userObject;
        });
};

getImgsArray = (request) => {
    return extractJSONObject()
        .then(databaseObject => {
            let inputID = extractQueryParams(request).username;
            let imgsArray;
            databaseObject.forEach(value => {
                if(value.username === inputID) {
                    imgsArray = value.photos;
                }
            })
            return imgsArray
        })
};

const updateDatabase = (inputID, request, originalFileName) => {
    const filepath = path.join(__dirname, '..', '..', 'database', 'data.json');

    return extractJSONObject()
        .then(databaseObject => {
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

module.exports = { getUsernames, getFeedObject, updateDatabase, getImgsArray };
