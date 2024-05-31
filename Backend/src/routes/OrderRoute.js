const express = require("express");
const orderController = require("../controllers/OrderController.js");
const midleware = require("../middleware/auth.js");

const orderRouter = express.Router();

orderRouter.post("/placeorder", midleware, orderController.placeOrder);
orderRouter.post("/verifyorder", orderController.verifyOrder);
orderRouter.post("/userorder", midleware, orderController.userOrders);
module.exports = orderRouter;
