const express = require('express');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const shiftRoutes = require('./routes/shiftRoutes');
connectDB();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to Turinix Employee Scheduling API!');
});

app.use('/employees', employeeRoutes);
app.use('/shifts', shiftRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
