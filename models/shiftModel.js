const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  department: { type: String, required: true },
  requiredSkills: [{ type: String }],
});

const Shift = mongoose.model('Shift', shiftSchema);

module.exports = Shift;
