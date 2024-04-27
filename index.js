const express = require('express');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const shiftRoutes = require('./routes/shiftRoutes');
const authRoutes = require('./routes/authRoutes');
const loggingMiddleware = require('./middleware/loggingMiddleware'); 
require('dotenv').config();

connectDB();

const app = express();

app.use(express.json());

app.use(loggingMiddleware); 

app.get('/', (req, res) => {
  res.send('Welcome to Turinix Employee Scheduling API!');
});

app.use('/employees', employeeRoutes);
app.use('/shifts', shiftRoutes);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
