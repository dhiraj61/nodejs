const express = require("express");
const path = require("path");

const app = express();
const pathPublic = path.join(__dirname, "public");

app.use(express.static(pathPublic));

app.listen(3000);
