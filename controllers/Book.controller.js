const Book = require("../models/Book.model.js");
const asyncHandler = require('../middlewares/asyncHandler.middleware.js');

const createBook = asyncHandler(async (req, res, next) => {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json({
      status: 201,
      message: "Book created successfully",
      book: savedBook,
    });
  });

const getBookById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({
      status: 201, // Corrected status code from 201 to 200
      message: "Book retrieved successfully",
      book,
    });
  });

  const updateBook = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({
      status: 201,
      message: "Book updated successfully",
      book: updatedBook,
    });
  });

  const deleteBook = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({
      status: 201,
      message: "Book deleted successfully",
    });
  });

  const addBookReview = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { reviewText, reviewer, rating } = req.body;
  
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
  
    const newReview = { reviewText, reviewer, rating };
    book.reviews.push(newReview);
    book.ratings =
      (book.ratings * (book.reviews.length - 1) + rating) / book.reviews.length;
  
    await book.save();
  
    res.status(201).json({ status: 201, message: "Review added successfully", book });
  });

  const addLendingHistory = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { userId, borrowedDate, returnedDate } = req.body;
  
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
  
    const lendingRecord = {
      user: userId,
      borrowedDate: new Date(borrowedDate),
      returnedDate: returnedDate ? new Date(returnedDate) : null,
    };
  
    book.lendingHistory.push(lendingRecord);
    await book.save();
  
    res.status(201).json({
      status: 201,
      message: "Lending history added successfully",
      book,
    });
  });

module.exports = {
  createBook,
  getBookById,
  updateBook,
  deleteBook,
  addBookReview,
  addLendingHistory
};
