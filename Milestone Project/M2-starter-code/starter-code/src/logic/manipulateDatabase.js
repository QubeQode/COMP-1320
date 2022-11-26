const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const { EOL } = require('os');

const extractQueryParams = require(path.join(__dirname, 'extractUserQuery'));

readDatabase = () => {
    return readFile(path.join(__dirname, '..', '..', 'database', 'data.json'))
        .then(data => {
            const databaseObject = JSON.parse(data);
            return databaseObject;
        });
};

const extractUser = (inputID, databaseObject) => {
    for (let index in databaseObject) {
        if (databaseObject[index].username === inputID) {
            return index;
        }
    }
};

getUsernames = () => {
    return readDatabase()
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
    return readDatabase()
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
    return readDatabase()
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

    return readDatabase()
        .then(databaseObject => {
            const userIndex = extractUser(inputID, databaseObject);
            databaseObject[userIndex].photos.push(originalFileName);
            databaseObject[userIndex].stats.posts = databaseObject[userIndex].photos.length;
            const writableObject = (JSON.stringify(databaseObject)).replaceAll(',', `,${EOL}`);
            writeFile(filepath, writableObject);
        })
};

const updateFeed = (inputID) => {
    return readDatabase()
        .then(databaseObject => {
            const userImgLibrary = databaseObject[extractUser(inputID, databaseObject)].photos;
            const newImage = userImgLibrary[userImgLibrary.length - 1];
            return (path.join(__dirname, '..', 'photos', inputID, newImage));
        })
}

module.exports = { getUsernames, getFeedObject, updateDatabase, getImgsArray, updateFeed };
