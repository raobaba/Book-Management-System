const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  const errorMessage = err.message || "Internal Server Error";
  res.status(500).json({ message: errorMessage });
};

module.exports = errorHandler;
