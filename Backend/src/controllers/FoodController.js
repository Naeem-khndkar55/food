const FoodModel = require("../models/FoodModel.js");
const fs = require("fs");
const path = require("path");
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
//food list
const foodList = async (req, res) => {
  try {
    const foods = await FoodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "somthing went wrong" });
  }
};
//remove food item list
const removeFoodList = async (req, res) => {
  try {
    const food = await FoodModel.findById(req.body.id);
    const imgPath = path.join(__dirname, "../../uploads", food.image);
    fs.unlink(imgPath, () => {});
    await FoodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "food item deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "somthing went wrong" });
  }
};

module.exports = { addFood, foodList, removeFoodList };
