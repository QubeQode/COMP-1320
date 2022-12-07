const url = require('url');

const extractQueryParams = (request) => url.parse(request.url, true).query;

module.exports = extractQueryParams;
