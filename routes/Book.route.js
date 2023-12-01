const express = require("express");
const bookRouter = express.Router();
const {
  createBook,
  getBookById,
  updateBook,
  deleteBook,
  addBookReview,
  addLendingHistory,
  getAllBooks,
} = require("../controllers/Book.controller.js");
const isLoggedIn = require("../middlewares/login.middleware.js");
const {isAdmin} = require("../middlewares/isAdmin.middleware.js");

bookRouter.post("/create", isLoggedIn, createBook);
bookRouter.get("/getById/:id", isLoggedIn, getBookById);
bookRouter.put("/update/:id", isLoggedIn, updateBook);
bookRouter.delete("/delete/:id", isLoggedIn, deleteBook);
bookRouter.post("/:id/review", isLoggedIn, addBookReview);
bookRouter.post("/:id/land-history", isLoggedIn, addLendingHistory);
bookRouter.get("/allBook", isAdmin, getAllBooks);

module.exports = bookRouter;
