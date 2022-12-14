const path = require("path");
const { parse } = require("url");
const { DEFAULT_HEADER } = require(path.join(__dirname, 'util', 'util'));
const controller = require(path.join(__dirname, 'controller'));
const { createReadStream } = require("fs");

const allRoutes = {
  // GET: localhost:3000/
  '/:get': (request, response) => {
    controller.getHomePage(request, response);
  },
  // GET: localhost:3000/userPfp
  '/userPfp:get': (request, response) => {
    controller.getPfp(request, response);
  },
  // POST: localhost:3000/
  '/upload:post': (request, response) => {
    controller.uploadImages(request, response);
  },
  // GET: localhost:3000/form
  "/form:get": (request, response) => {
    controller.getFormPage(request, response);
  },
  // POST: localhost:3000/form
  "/form:post": (request, response) => {
    controller.sendFormData(request, response);
  },
  // GET: localhost:3000/feed
  "/feed:get": (request, response) => {
    controller.getFeed(request, response);
  },
  // GET: localhost:3000/feed/galleryImage
  "/galleryImage:get": (request, response) => {
    controller.getFeedImgs(request, response);
  },
  // 404 routes
  default: (request, response) => {
    response.writeHead(404, DEFAULT_HEADER);
    createReadStream(path.join(__dirname, "views", "404.html"), "utf8").pipe(
      response
    );
  },
};

function handler(request, response) {
  const { url, method } = request;

  const { pathname } = parse(url, true);

  const key = `${pathname}:${method.toLowerCase()}`;
  const chosen = allRoutes[key] || allRoutes.default;

  return Promise.resolve(chosen(request, response)).catch(
    handlerError(response)
  );
}

function handlerError(response) {
  return (error) => {
    console.log("Something bad has happened**", error.stack);
    response.writeHead(500, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        error: "internet server error!!",
      })
    );
    return response.end();
  };
}

module.exports = handler;
