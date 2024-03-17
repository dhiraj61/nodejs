const dbConnect = require("./mongodb");

const update = async () => {
  let conn = await dbConnect();
  let result = await conn.updateOne({ model: "j1" }, { $set: { model: "36" } });
  if (result.acknowledged) {
    console.log("data updated");
  }
};

update();
