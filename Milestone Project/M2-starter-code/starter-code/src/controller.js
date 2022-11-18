const fs = require("fs");
const { readFile, rename, writeFile } = require('fs').promises;
const { DEFAULT_HEADER } = require("./util/util");
const path = require("path");
const qs = require("querystring");
const formidable = require('formidable');
const url = require('url');
const { EOL } = require('os');


const controller = {
  getHomePage: (request, response) => {
    return response.end(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homepage</title>
    </head>

    <body>
        <div class="content-box">
            <img src="/john123/profile.jpeg" width="100" height="100">
            <form action="/api/upload?username=john123" enctype="multipart/form-data" method="post">
                <input type="file" name="uploadJohn" name="multipleFiles" multiple="multiple" />
                <input type="submit" value="Upload" />
            </form>
            <a href="/feed?username=john123">john123</a>
        </div>
        <div class="content-box">
            <img src="/sandra123/profile.jpeg" width="100" height="100">
            <form action="/api/upload?username=sandra123" enctype="multipart/form-data" method="post">
                <input type="file" id="uploadSandra" name="multipleFiles" multiple="multiple" />
                <input type="submit" value="Upload" />
            </form>
            <a href="/feed?username=sandra123">sandra123</a>
        </div>
    </body>

    </html>
    `);
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
    // console.log(request.url); try: http://localhost:3000/feed?username=john123
    return readFile(path.join(__dirname, '.', 'views', 'feed.ejs'), 'utf-8')
        .then((data) => response.end(data));
  },
  uploadImages: (request, response) => {
      

    const form = formidable({multiples: true, uploadDir: `${__dirname}/photos`, keepExtensions: true,});

    form.parse(request, (err, fields, files) => {
        if (err) {
            response.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
            response.end(String(err));
        return;
        }
        const originalFileName = files. uploadJohn.originalFilename;
        const newFileName = files.uploadJohn.newFilename;
        rename(`${__dirname}/photos/${newFileName}`, `${__dirname}/photos/${originalFileName}`)
        .then(() => {
            Url = (url.parse(request.url));
            const startPoint = Url.query.indexOf('=');
            const inputID = Url.query.slice((startPoint + 1), (Url.query.length));
            readFile(path.join(__dirname, "..", "database", "data.json"), 'utf-8')
                .then((data) => {const databaseObject = JSON.parse(data); return databaseObject;})
                .then((databaseObject) => {
                    for (let index in databaseObject) {
                        if (databaseObject[index].username === inputID) {
                            databaseObject[index].photos.push(originalFileName);
                            databaseObject[index].stats.posts = databaseObject[index].photos.length;
                            const writableObject = JSON.stringify(databaseObject);
                            const readableObject = writableObject.replaceAll(',', `,${EOL}`);
                            writeFile(path.join(__dirname, "..", "database", "data.json"), readableObject);
                            return;
                        }
                    }
                })
                .catch((err) => console.error(err));
        })
    });
    // response.end(
    //     // send homepage again so you end on the same screen
    // );
  },
};

module.exports = controller;
