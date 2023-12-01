const Book = require("../models/Book.model.js");

const createBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res
      .status(201)
      .json({
        status: 201,
        message: "Book created successfully",
        book: savedBook,
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
};
