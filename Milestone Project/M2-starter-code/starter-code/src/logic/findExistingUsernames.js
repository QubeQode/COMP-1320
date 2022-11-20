const { readFile } = require('fs').promises;
const path = require('path');

findExistingUsernames = () => {
 return readFile(path.join(__dirname, '..', '..', 'database', 'data.json'))
        .then(data => {
            const databaseObject = JSON.parse(data);
            const existingUsernames = [];
            for (let index in databaseObject) {
                existingUsernames.push(databaseObject[index].username);
            }
            return existingUsernames;
        })
        .catch(err => console.error(err));
};

module.exports = findExistingUsernames;
