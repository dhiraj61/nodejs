const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect() {
  let conn = await client.connect();
  let database = conn.db("electronic");
  return database.collection("mobiles");
}

module.exports = dbConnect;