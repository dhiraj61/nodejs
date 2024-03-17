const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "electronic";

async function getData() {
  let conn = await client.connect();
  let db = conn.db(database);
  let collection = db.collection("mobiles");
  let data = await collection.find({}).toArray();
  console.log(data);
}

getData();
