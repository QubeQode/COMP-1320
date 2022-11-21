const url = require('url');

const extractUser = (request) => {
    const URL = url.parse(request.url);
    const sliceStart = (URL.query.indexOf('=')) + 1;
    return URL.query.slice(sliceStart, (URL.query.length));
};

module.exports = extractUser;