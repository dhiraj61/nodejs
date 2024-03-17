const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema({
  model: String,
  price: Number,
  brand: String,
});

module.exports = mongoose.model("mobiles", MobileSchema);
