const mongoose = require("mongoose");

const conn = mongoose.connect("mongodb://localhost:27017/electronic");
const MobileSchema = new mongoose.Schema({
  model: String,
  price: Number,
  brand: String,
});

const saveInDb = async () => {
  const Mobiles = mongoose.model("mobiles", MobileSchema);
  let data = await Mobiles({
    model: "A53",
    price: 30000,
    brand: "Samsung",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDb = async () => {
  const Mobiles = mongoose.model("mobiles", MobileSchema);
  let data = await Mobiles.updateOne(
    { model: "A52" },
    { $set: { price: 28500 } }
  );
  console.log(data);
};

const deleteInDb = async () => {
  const Mobiles = mongoose.model("mobiles", MobileSchema);
  let data = await Mobiles.deleteOne({ model: "A52" });
  console.log(data);
};

const findInDb = async () => {
  const Mobiles = mongoose.model("mobiles", MobileSchema);
  let data = await Mobiles.find({});
  console.log(data);
};

findInDb();
