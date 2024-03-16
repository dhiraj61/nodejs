const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  resp.send(`
  <h1>Welcome, This Is Homepage</h1>
  <a href="/about">Go to About Us Page</a>
  `);
});

app.get("/about", (req, resp) => {
  resp.send(`
  <h1>Welcome, This Is About Us Page</h1>
  <input type="text" name="name">
  <button>Submit</button>
  <a href="/">Go to Home Page</a>`);
});

app.get("/contactUs", (req, resp) => {
  resp.send([
    { name: "Dhiraj", email: "dhiraj@gmail.com" },
    { name: "Niraj", email: "niraj@gmail.com" },
  ]);
});

app.listen(3000);
