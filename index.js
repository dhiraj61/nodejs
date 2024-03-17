const express = require("express");
require("./config");
const mobiles = require("./collection");

const app = express();

app.use(express.json());

app.post("/", async (req, resp) => {
  let data = new mobiles(req.body);
  let result = await data.save();
  resp.send(result);
});

app.get("/", async (req, resp) => {
  let data = await mobiles.find();
  resp.send(data);
});

app.put("/:_id", async (req, resp) => {
  let data = await mobiles.updateOne(req.params, { $set: req.body });
  resp.send("data updated");
  if (data.acknowledged) {
    console.log("Data updated successfully!");
  }
});

app.delete("/:_id", async (req, resp) => {
  let data = await mobiles.deleteOne(req.params);
  if (data.deletedCount != 0) {
    resp.send("Data Deleted Succefully");
  }
});

app.listen(3000);
