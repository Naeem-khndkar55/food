const UserModel = require("../models/UserModel.js");

//add to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await UserModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something is wrong" });
  }
};

//remove items from user cart

const removeFromCart = async (req, res) => {
  try {
    let userData = await UserModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something is wrong" });
  }
};

//fetch  userCart data
const getCart = async (req, res) => {
  try {
    let userData = await UserModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something is wrong" });
  }
};

module.exports = { addToCart, removeFromCart, getCart };
