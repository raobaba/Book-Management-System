const asyncHandler = require("./asyncHandler.middleware.js");
const User = require("../models/User.model.js");

const isAdminWithCookies = asyncHandler(async (req, res, next) => {
  const userId = req.cookies.userId;

  if (!userId) {
    return res
      .status(403)
      .json({ message: "Access denied. User not authenticated." });
  }

  try {
    const user = await User.findById(userId);

    if (!user || !user.isAdmin) {
      return res
        .status(403)
        .json({ message: "Access denied. Admin privileges required." });
    }

    req.user = user; 
    next();
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = isAdminWithCookies;
