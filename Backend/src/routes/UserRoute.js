const express = require("express");

const userController = require("../controllers/UserController.js");
const UserRouter = express.Router();
// const middleware = require("../middleware/auth.js");
UserRouter.post("/register", userController.register);
UserRouter.post("/login", userController.login);
UserRouter.get("/user", userController.User);
module.exports = UserRouter;
