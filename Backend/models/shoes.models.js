const mongoose = require("mongoose");

const shoesSchema = mongoose.Schema(
  {
    name: String,
    img: String,
    price: Number,
    Spise: Number,
    brand: String,
    rating: Number 
  },
  {
    versionKey: false,
  }
);

const ShoesModel = mongoose.model("shoe", shoesSchema);

module.exports = {
  ShoesModel,
};
