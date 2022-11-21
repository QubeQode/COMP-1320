const path = require("path");
const http = require("http");
const handler = require(path.join(__dirname, 'handler'));

const PORT = process.env.PORT || 3000;

http
  .createServer(handler)
  .listen(PORT, () => console.log(`server is running at  ${PORT}`));
