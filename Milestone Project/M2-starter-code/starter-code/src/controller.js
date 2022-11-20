const path = require("path");
const fs = require("fs");
const { readFile, rename, writeFile } = require('fs').promises;
const qs = require("querystring");
const formidable = require('formidable');
const url = require('url');
const { EOL } = require('os');

const { DEFAULT_HEADER } = require(path.join(__dirname, '.', 'util', 'util'));
const { loadPage, loadEJS } = require(path.join(__dirname, '.', 'logic', 'loadpage'));
const { getUsernames } = require(path.join(__dirname, '.', 'logic', 'manipulateDatabase'));
const uploadImage = require(path.join(__dirname, '.', 'logic', 'uploadImage'));


const controller = {
  getHomePage: (request, response) => {
    getUsernames()
      .then(data => loadEJS(path.join(__dirname, '.', 'views', 'index.ejs'), { usernames: data }, response));
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
    loadPage(path.join(__dirname, '.', 'views', 'feed.ejs'), response);
  },
  uploadImages: (request, response) => {
    uploadImage(request, response);
  },
};

module.exports = controller;
