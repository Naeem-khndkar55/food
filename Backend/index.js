const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db.js");
const Foodrouter = require("./src/routes/FoodRoute.js");
const UserRouter = require("./src/routes/UserRoute.js");
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

app.listen(port, () => {
  console.log(`app is runnig to the port ${port}`);
});
