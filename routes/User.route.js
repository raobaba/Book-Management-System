const express = require("express");
const userRouter = express.Router();
const {
  Register,
  Login,
  Logout,
  getAllUsers,
} = require("../controllers/User.controller.js");
const isAdmin = require("../middlewares/isAdmin.middleware.js");

userRouter.post("/register", Register);
userRouter.post("/login", Login);
userRouter.get("/logout", Logout);
userRouter.get("/allUser", isAdmin, getAllUsers);

module.exports = userRouter;
