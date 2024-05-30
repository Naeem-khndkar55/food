const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db.js");
const Foodrouter = require("./src/routes/FoodRoute.js");
const UserRouter = require("./src/routes/UserRoute.js");
const cartRouter = require("./src/routes/CartRoute.js");
const orderRouter = require("./src/routes/OrderRoute.js");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
connectDB();

//api

app.use("/api/food", Foodrouter);
app.use("/image", express.static("./uploads"));
app.use("/api/user", UserRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`app is runnig to the port ${port}`);
});
