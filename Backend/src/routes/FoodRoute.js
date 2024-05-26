const express = require("express");
const multer = require("multer");
const path = require("path");
const FoodController = require("../controllers/FoodController.js");
const Foodrouter = express.Router();

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Route for adding food
Foodrouter.post("/add", upload.single("image"), FoodController.addFood);

module.exports = Foodrouter;
