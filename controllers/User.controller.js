const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model.js");
const asyncHandler = require("../middlewares/asyncHandler.middleware");

const Register = asyncHandler(async (req, res) => {
  const { name, email, password, age, address, isAdmin } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user = new User({
    name,
    email,
    password: hashedPassword,
    age,
    address,
    isAdmin
  });

  await user.save();

  // Return registered user data upon successful registration
  res
    .status(201)
    .json({ status: 201, message: "User created successfully", user });
});

const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
    expiresIn: "1h",
  });

  // Return user data and token upon successful login
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 3600000,
    sameSite: "strict",
  });
  res.cookie("userId", user._id, {
    httpOnly: true,
    maxAge: 3600000,
    sameSite: "strict",
  });

  res.json({ status: 201, message: "Logged in successfully", user });
});

const Logout = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "strict",
  });

  res.status(200).json({ status: 201, message: "Logged out successfully" });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find();
  res.status(200).json({
    status: 200,
    message: "All users retrieved successfully",
    users: allUsers,
  });
});

module.exports = { Register, Login, Logout, getAllUsers };
