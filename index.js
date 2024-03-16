const express = require("express");
const path = require("path");

const app = express();
const pathPublic = path.join(__dirname, "public");

// app.use(express.static(pathPublic));

app.get("/", (req, resp) => {
  resp.sendFile(`${pathPublic}/index.html`);
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${pathPublic}/About.html`);
});

app.get("*", (req, resp) => {
  resp.sendFile(`${pathPublic}/nopage.html`);
});
app.listen(3000);
