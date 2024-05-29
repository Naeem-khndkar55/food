const UserModel = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
require("dotenv").config();
//register user
const key = process.env.JWT_SECRET;
const createToken = (id) => {
  return jwt.sign({ id }, key);
};
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.json({ success: false, message: "Email already exist" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid Eail" });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Password must be atleast 6 character",
      });
    }

    const hashpassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashpassword,
    });

    const result = await newUser.save();
    const token = createToken(result._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something is wrong" });
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Not Exist" });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.json({ success: false, message: "Wrong Password" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something is wrong" });
  }
};

module.exports = { login, register };
