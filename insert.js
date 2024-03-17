const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      model: "x50",
      price: 18000,
      brand: "Nokia",
    },
    {
      model: "j1",
      price: 15000,
      brand: "samsung",
    },
  ]);
  if (result.acknowledged) {
    console.log("Data Inserted");
  }
};

insert();
