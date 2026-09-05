const env = require("../config/env");

const notFoundHandler = (req, res) => {
  res.status(404).json({ error: `No route for ${req.method} ${req.originalUrl}` });
};

const errorHandler = (error, req, res, next) => {
  if (res.headersSent) return next(error);

  const status = error.status || 500;

  if (status >= 500) {
    console.error(`${req.method} ${req.originalUrl}`, error);
  }

  res.status(status).json({
    error: status >= 500 && env.nodeEnv === "production" ? "Internal server error" : error.message,
    ...(error.details ? { details: error.details } : {}),
  });
};

const asyncRoute = (handler) => (req, res, next) =>
  Promise.resolve(handler(req, res, next)).catch(next);

module.exports = { notFoundHandler, errorHandler, asyncRoute };
