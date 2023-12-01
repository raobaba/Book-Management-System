const express = require('express');
const bookRouter = express.Router();
const {createBook} = require('../controllers/Book.controller.js');

bookRouter.post('/create', createBook);

module.exports = bookRouter;
