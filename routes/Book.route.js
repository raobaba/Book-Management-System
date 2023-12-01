const express = require("express");
const bookRouter = express.Router();
const {
  createBook,
  getBookById,
  updateBook,
  deleteBook,
  addBookReview,
  
} = require("../controllers/Book.controller.js");

bookRouter.post("/create", createBook);
bookRouter.get("/getById/:id", getBookById);
bookRouter.put("/update/:id", updateBook);
bookRouter.delete("/delete/:id", deleteBook);
bookRouter.post('/:id/review',addBookReview);

module.exports = bookRouter;
