const mongoose = require("mongoose");

const main = async () => {
  let conn = mongoose.connect("mongodb://localhost:27017/electronic");
  let MobileSchema = new mongoose.Schema({
    model: String,
    price: Number,
    brand: String,
  });
  let Mobilemodel = mongoose.model("mobiles", MobileSchema);
  let data = Mobilemodel({
    model: "A50",
    price: 25000,
    brand: "Samsung",
  });
  let result = await data.save();
  console.log(result);
};

main();
