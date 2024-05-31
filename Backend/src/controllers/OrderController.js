const OrderModel = require("../models/OrderModel.js");
const UserModel = require("../models/UserModel.js");
const stripe = require("stripe");

// Placing user order from frontend

const s_key = process.env.STRIPE_KEY;

const Stripee = stripe(s_key);
const frontend_url = "http://localhost:5173";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const newOrder = new OrderModel({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();
    await UserModel.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency: "USD",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // Adding the delivery charge
    line_items.push({
      price_data: {
        currency: "USD",
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });

    const session = await Stripee.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Error placing order:", error);
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await OrderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Payment Successfull" });
    } else {
      await OrderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment is not succeed" });
    }
  } catch (error) {
    console.error("Error placing order:", error);
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const userOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error placing order:", error);
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = { placeOrder, verifyOrder, userOrders };
