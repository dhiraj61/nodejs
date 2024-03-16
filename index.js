const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();

route.use(reqFilter);

route.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});

app.get("/user", (req, resp) => {
  resp.send("User Details");
});

app.use("/", route);

app.listen(3000);
