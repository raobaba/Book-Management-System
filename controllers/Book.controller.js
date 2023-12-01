const Book = require("../models/Book.model.js");

const createBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json({
      status: 201,
      message: "Book created successfully",
      book: savedBook,
    });
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({
      status: 201,
      message: "Book retrieve successfully",
      book,
    });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createBook,
  getBookById,
  updateBook,
};
