const express = require("express");
const orderController = require("../controllers/OrderController.js");
const midleware = require("../middleware/auth.js");

const orderRouter = express.Router();

orderRouter.post("/placeorder", midleware, orderController.placeOrder);

module.exports = orderRouter;
