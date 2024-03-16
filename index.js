const http = require("http");
const data = require("./data");
const { json } = require("express");

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "applicatinjson" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(3000);
