const { readdir } = require('fs').promises;
const path = require('path');
const extractUser = require(path.join(__dirname, '.', 'extractUserQuery'));

getPfpPaths = () => {
    return readdir(path.join(__dirname, '..', 'photos'), 'utf-8')
        .then((data) => {
            const pfpPaths = [];
            for (let index = 1; index < data.length; index++) {
                pfpPaths.push(path.join(process.cwd(), '..', 'photos', data[index], 'profile.jpeg'));
            }
            return (pfpPaths);
        })
        .catch(err => console.error(err));
};

getUploadedPhotos = (request) => {
    const inputID = extractUser(request);
    const photoPaths = [];
    return readdir(path.join(__dirname, '..', 'photos', inputID), 'utf-8')
        .then(data => {
            for (let file of data) {
                if (file !== 'profile.jpeg') {
                    photoPaths.push(path.join(__dirname, '..', 'photos', inputID, file));
                }
            }
            return photoPaths;
        })
        .catch(err => console.error(err));
};

module.exports = { getPfpPaths, getUploadedPhotos };
