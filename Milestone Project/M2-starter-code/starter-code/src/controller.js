const { userInfo } = require("os");
const path = require("path");
const qs = require("querystring");

const getFilepathTemplate = (logicElement) => path.join(__dirname, 'logic', logicElement);

const { loadEJS } = require(getFilepathTemplate('loadPage'));
const { getUsernames, getFeedObject, getImgsAray } = require(getFilepathTemplate('manipulateDatabase'));
const uploadImage = require(getFilepathTemplate('uploadImage'));
const { getPfpPaths, getFeedImgs } = require(getFilepathTemplate('returnImgs'));


const controller = {
  getHomePage: (request, response) => {
    getUsernames()
      .then(data => loadEJS(path.join(__dirname, 'views', 'index.ejs'), { usernames: data }, response));
  },
  getPfp: (request, response) => {
        getPfpPaths(request, response);
  },
  getFormPage: (request, response) => {
    return response.end(`
    <h1>Hello world</h1> <style> h1 {color:red;}</style>
    <form action="/form" method="post">
    <input type="text" name="username"><br>
    <input type="text" name="password"><br>
    <input type="submit" value="Upload">
    </form>
    `);
  },
  sendFormData: (request, response) => {
    var body = "";

    request.on("data", function (data) {
      body += data;
    });

    request.on("end", function () {
      var post = qs.parse(body);
      console.log(post);
    });
  },
  getFeed: (request, response) => {
    getFeedObject(request)
      .then(userObject => {
        loadEJS(path.join(__dirname, 'views', 'feed.ejs'), userObject, response)
      });
  },
  getFeedImgs: (request, response) => {
    getImgsArray(request)
      .then(imgsArray => {
        getFeedImgs(imgsArray, request, response)
      })
  },
  uploadImages: (request, response) => {
    uploadImage(request, response);
  },
};

module.exports = controller;
