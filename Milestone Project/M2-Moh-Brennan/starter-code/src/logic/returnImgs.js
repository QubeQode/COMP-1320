const { createReadStream } = require('fs');
const { readFile } = require('fs').promises;
const path = require('path');
const extractQueryParams = require(path.join(__dirname, 'extractUserQuery'));

getPfpPaths = (request, response) => {
    const inputID = extractQueryParams(request).username;
          createReadStream(path.join(__dirname, '..', 'photos', inputID, 'profile.jpeg'))
            .pipe(
            response
            );
};

getFeedImgs = (imgsArray, request, response) => {
  const { photo, username } = extractQueryParams(request);
  imgsArray.forEach(img => {
    if (img === photo) {
      createReadStream(path.join(__dirname, '..', 'photos', username, img))
      .pipe(
        response
      );
    }
  })
  // return readFile(path.join(__dirname, '..', 'photos', userObject.username, photo))
  //   .then(data => {
  //     response.end(data);
  //   })
};

module.exports = { getPfpPaths, getFeedImgs };
