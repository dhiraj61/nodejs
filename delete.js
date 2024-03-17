const dbConnect = require("./mongodb");

const delet = async () => {
  const db = await dbConnect();
  const result = await db.deleteOne({
    model: "x50",
  });
  if (result.acknowledged) {
    console.log("data deleted");
  }
};

delet();
