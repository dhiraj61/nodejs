const dbConnect = require("./mongodb");
const express = require("express");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  await data.insertOne(req.body);
  data = await data.find({}).toArray();
  resp.send(data);
});

app.put("/:model", async (req, resp) => {
  let data = await dbConnect();
  await data.updateOne({ model: req.params.model }, { $set: req.body });
  let result = await data.find({}).toArray();
  resp.send(result);
});

app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  await data.deleteOne({ _id:new mongodb.ObjectId(req.params.id) });
  let result = await data.find({}).toArray();
  resp.send(result);
});
app.listen(3000);
