const mongoose = require("mongoose");

FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  image: { type: String, require: true },
  category: { type: String, require: true },
});
const FoodModel =
  mongoose.models.FoodModel || mongoose.model("FoodModel", FoodSchema);
module.exports = FoodModel;
