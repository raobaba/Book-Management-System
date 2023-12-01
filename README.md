# Book Management System

The Book Management System is a web application developed using Node.js, Express.js, and MongoDB. It offers a comprehensive solution for managing inventories in libraries or bookstores, enabling users to perform various operations related to books and users.

## Technologies Used

- **Node.js:** JavaScript runtime
- **Express.js:** Web application framework for Node.js
- **MongoDB:** NoSQL database for storing book and user data
- **Mongoose:** MongoDB object modeling for Node.js
- **bcryptjs:** Library for password hashing
- **jsonwebtoken:** Library for generating JSON Web Tokens
- **dotenv:** Module for loading environment variables from a .env file
- **cors:** Middleware for enabling CORS (Cross-Origin Resource Sharing)
- **cookie-parser:** Middleware for handling cookies
- **asyncHandler:** Middleware for handling asynchronous functions
- **Error handling middleware:** Custom middleware for error handling

## Features

### Authentication and Authorization

- Registration (/register) and login (/login) functionality for users.
- Generating JSON Web Tokens for authentication and authorization.
- Logout (/logout) feature to invalidate tokens and end sessions.

### Book Management

- CRUD (Create, Read, Update, Delete) operations for books.
- Endpoint (/api/v1) for managing books:
  - Create a new book (/create)
  - Get book by ID (/getById/:id)
  - Update book by ID (/update/:id)
  - Delete book by ID (/delete/:id)
  - Add book review (/:id/review)
  - Add lending history (/:id/land-history)
  - Get all books (/allBook) - accessible only to administrators

### User Management

- Registration, login, and logout functionalities for users.
- Endpoint (/api/v1) for managing users:
  - Register (/register)
  - Login (/login)
  - Logout (/logout)
  - Get all users (/allUser) - accessible only to administrators

## Folder Structure

- **config:** Database connection setup and environment variables configuration.
- **controllers:** Functions handling business logic for books and users.
- **middlewares:** Custom middleware functions for error handling, authentication, and authorization.
- **models:** MongoDB schemas for Book and User.
- **routes:** Express routes for Book and User functionalities.
- **app.js:** Main file where Express app is configured and routes are defined.
- **asyncHandler.middleware.js:** Custom middleware for handling asynchronous functions.

## How to Run

### Installation

1. Clone the repository from GitHub.
2. Run `npm install` to install dependencies.

### Configuration

1. Create a `.env` file with required environment variables like PORT, NODE_ENV, SECRET, and DB_URI.

### Running the Application

- Run `npm start` to start the server.

## API Endpoints

### Books

- `/api/v1/create`: POST - Create a new book.
- `/api/v1/getById/:id`: GET - Get book by ID.
- `/api/v1/update/:id`: PUT - Update book by ID.
- `/api/v1/delete/:id`: DELETE - Delete book by ID.
- `/api/v1/:id/review`: POST - Add a review for a book.
- `/api/v1/:id/land-history`: POST - Add lending history for a book.
- `/api/v1/allBook`: GET - Get all books (accessible to administrators).

### Users

- `/api/v1/register`: POST - Register a new user.
- `/api/v1/login`: POST - Login for existing users.
- `/api/v1/logout`: GET - Logout to invalidate session.
- `/api/v1/allUser`: GET - Get all users (accessible to administrators).

[Book Management System Postman Collection]([<insert your Postman collection link here>](https://universal-star-350473.postman.co/workspace/New-Team-Workspace~82614d56-12e5-456c-a56d-81b2ad8e7dc8/collection/30678801-1e82d496-f877-4aba-a82f-0e02382bc232?action=share&creator=30678801))

This documentation provides an overview of the Book Management System, its functionalities, and instructions on how to operate it. For detailed information on each endpoint, its request and response structure, refer to the respective API documentation or Swagger documentation if available.
