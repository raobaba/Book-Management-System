const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/error.middleware.js");
const bookRouter = require("./routes/Book.route.js");
const userRouter = require("./routes/User.route.js");
const Connection = require("./config/db.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
Connection();

app.use("/api/v1", bookRouter);
app.use("/api/v1", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "Triluxo/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running! 🚀");
  });
}

app.use(errorHandler);

module.exports = app;
