const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Provide Your Age");
  } else if (req.query.age < 18) {
    resp.send("You are not eligible");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});

app.get("/user", (req, resp) => {
  resp.send("User Details");
});

app.listen(3000);
