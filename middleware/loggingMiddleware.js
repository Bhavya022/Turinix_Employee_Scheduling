const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'logs', 'access.log');

const loggingMiddleware = (req, res, next) => {
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  fs.appendFile(logFilePath, logData, (err) => {
    if (err) {
      console.error('Error writing to access log:', err);
    }
  });
  next();
};

module.exports = loggingMiddleware;
