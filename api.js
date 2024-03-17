const dbConnect = require("./mongodb");
const express = require("express");

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
app.listen(3000);
