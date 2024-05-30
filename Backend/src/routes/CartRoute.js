const express = require("express");
const cartConttroller = require("../controllers/CartController.js");
const midleware = require("../middleware/auth.js");
const cartRouter = express.Router();

cartRouter.post("/addtocart", midleware, cartConttroller.addToCart);

cartRouter.post("/removecart", midleware, cartConttroller.removeFromCart);
cartRouter.post("/getcart", midleware, cartConttroller.getCart);

module.exports = cartRouter;
