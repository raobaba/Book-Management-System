const express = require("express");
const bookRouter = express.Router();
const {
  createBook,
  getBookById,
  updateBook,
  deleteBook,
  addBookReview,
  addLendingHistory,
  
} = require("../controllers/Book.controller.js");

bookRouter.post("/create", createBook);
bookRouter.get("/getById/:id", getBookById);
bookRouter.put("/update/:id", updateBook);
bookRouter.delete("/delete/:id", deleteBook);
bookRouter.post('/:id/review',addBookReview);
bookRouter.post('/:id/land-history',addLendingHistory);

module.exports = bookRouter;
