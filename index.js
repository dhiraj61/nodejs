const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  console.log("We are getting name from browser " + req.query.name);
  resp.send("Welcome, " + req.query.name);
});

app.get("/about", (req, resp) => {
  resp.send("Welcome, " + req.query.name + " at About Us Page");
});

app.get("/contactUs", (req, resp) => {
  resp.send("Welcome, This Is Contact Us Page");
});

app.listen(3000);
