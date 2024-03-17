const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dataBase = "electronic";

async function dbConnect() {
  let conn = await client.connect();
  let db = conn.db(dataBase);
  return db.collection("mobiles");
}

module.exports = dbConnect;
