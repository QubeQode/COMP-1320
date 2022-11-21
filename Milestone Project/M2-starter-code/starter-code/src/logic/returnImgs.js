const { createReadStream } = require('fs');
const { readFile } = require('fs').promises;
const path = require('path');
const { getFeedObject } = require('./manipulateDatabase');
const extractUser = require(path.join(__dirname, 'extractUserQuery'));

getPfpPaths = (request, response) => {
    const inputID = extractUser(request);
          createReadStream(path.join(__dirname, '..', 'photos', inputID, 'profile.jpeg'))
            .pipe(
            response
            );
};

getFeedImgs = (request, response) => {
  getFeedObject(request)
    .then(userObject => {
      userObject.photos.forEach(photo => {
        readFile(path.join(__dirname, '..', 'photos', userObject.username, photo))
          .then((data) => response.end(data)
          );
      });
    })
};

module.exports = { getPfpPaths, getFeedImgs };
