const express = require('express');
const userRouter = express.Router();
const { Register,Login,Logout } = require('../controllers/User.controller.js');

userRouter.post('/register', Register);
userRouter.post('/login', Login);
userRouter.get('/logout', Logout);

module.exports = userRouter;
