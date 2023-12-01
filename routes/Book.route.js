const express = require('express');
const bookRouter = express.Router();
const {createBook, getBookById} = require('../controllers/Book.controller.js');

bookRouter.post('/create', createBook);
bookRouter.get('/getById/:id',getBookById);

module.exports = bookRouter;
