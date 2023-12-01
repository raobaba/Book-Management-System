const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    ISBN: {
        type: String,
        unique: true,
        required: true
    },
    publicationDate: {
        type: Date
    },
    language: {
        type: String
    },
    pageCount: {
        type: Number
    },
    publisher: {
        type: String
    },
    edition: {
        type: String
    },
    price: {
        type: Number
    },
    ratings: {
        type: Number,
        default: 0
    },
    available: {
        type: Boolean,
        default: true
    },
    imageURL: {
        type: String
    },
    tableOfContents: {
        type: [String]
    },
    awards: {
        type: [String]
    },
    reviews: [
        {
            reviewText: {
                type: String
            },
            reviewer: {
                type: String
            },
            rating: {
                type: Number
            }
        }
    ],
    lendingHistory: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            borrowedDate: {
                type: Date,
                default: Date.now
            },
            returnedDate: {
                type: Date
            }
        }
    ],
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
