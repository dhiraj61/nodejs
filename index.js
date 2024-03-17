const express = require("express");
require("./config");
const mobiles = require("./collection");

const app = express();

app.use(express.json());

app.get("/:key", async (req, resp) => {
  let data = await mobiles.find({
    $or: [
      { model: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.listen(3000);
