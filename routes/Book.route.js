const express = require("express");
const bookRouter = express.Router();
const {
  createBook,
  getBookById,
  updateBook,
} = require("../controllers/Book.controller.js");

bookRouter.post("/create", createBook);
bookRouter.get("/getById/:id", getBookById);
bookRouter.put("/update/:id", updateBook);

module.exports = bookRouter;
