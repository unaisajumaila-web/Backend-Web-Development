/**
 * Central error handler.
 */

const config = require('../config');

module.exports = function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;

  const body = {
    error: err.message || 'Internal Server Error',
  };

  // Show stack only in development logs, not in the API response.
  if (config.nodeEnv !== 'production' && err.stack) {
    console.error(err.stack);
  }

  res.status(status).json(body);
};