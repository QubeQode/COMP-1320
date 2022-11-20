const { readFile } = require('fs').promises;
const path = require('path');
const extractUser = require(path.join(__dirname, '.', 'extractUserQuery'));

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

getFeedArray = (request) => {
    return extractJSONObject()
        .then((databaseObject) => { 
            const inputID = extractUser(request);
            for (let index in databaseObject) {
                if (databaseObject[index].username === inputID) {
                    userInfo.push(databaseObject[index]);
                }
            }
            return userInfo;
        })
        .catch(err => console.error(err));
};

module.exports = { getUsernames, getFeedArray };
