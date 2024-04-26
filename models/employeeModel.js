const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  availability: {
    type: [String], 
    default: []
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
