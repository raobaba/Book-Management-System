const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require('path');
// const errorMiddleware = require("./middlewares/error");
const Connection = require("./config/db.js");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
Connection();


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

// app.use(errorMiddleware);

module.exports = app;