const express = require("express");

const userController = require("../controllers/UserController.js");
const UserRouter = express.Router();

UserRouter.post("/register", userController.register);
UserRouter.post("/login", userController.login);

module.exports = UserRouter;
