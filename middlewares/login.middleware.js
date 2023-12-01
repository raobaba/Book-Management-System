const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler.middleware.js');

const isLoggedIn = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
});

module.exports = isLoggedIn;
