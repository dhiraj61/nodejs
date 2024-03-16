const express = require("express");
const path = require("path");

const app = express();
const pathPublic = path.join(__dirname, "public");

app.set("view engine", "ejs"); // set up ejs for templating

app.get("/", (req, resp) => {
  resp.sendFile(`${pathPublic}/index.html`);
});

app.get("/profile", (req, resp) => {
  const user = {
    name: "Dhiraj",
    email: "dhiraj@gmail.com",
    city: "Surat",
  };
  resp.render("profile", { user });
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${pathPublic}/About.html`);
});

app.get("*", (req, resp) => {
  resp.sendFile(`${pathPublic}/nopage.html`);
});
app.listen(3000);
