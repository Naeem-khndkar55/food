const FoodModel = require("../models/FoodModel.js");
const fs = require("fs");
//addfood
const addFood = async (req, res) => {
  let img_fileName = `${req.file.filename}`;
  const fooditem = req.body;
  const food = new FoodModel({
    name: fooditem.name,
    description: fooditem.description,
    price: fooditem.price,
    category: fooditem.category,
    image: img_fileName,
  });
  try {
    await food.save();
    res.json({ success: true, message: "food added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "somthing went wrong" });
  }
};

module.exports = { addFood };
