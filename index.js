const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  resp.send("Welcome, This Is Homepage");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome, This Is About Us Page");
});

app.get("/contactUs", (req, resp) => {
  resp.send("Welcome, This Is Contact Us Page");
});

app.listen(3000);
