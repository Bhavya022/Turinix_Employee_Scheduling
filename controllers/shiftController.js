const Shift = require('../models/shiftModel');
exports.createShift = async (req, res) => {
  try {
    const { startTime, endTime, department, requiredSkills } = req.body;
    const shift = new Shift({ startTime, endTime, department, requiredSkills });
    await shift.save();
    res.status(201).json(shift);
  } catch (error) {
    console.error('Error creating shift:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.getAllShifts = async (req, res) => {
  try {
    const shifts = await Shift.find();
    res.json(shifts);
  } catch (error) {
    console.error('Error getting shifts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.getShiftById = async (req, res) => {
  try {
    const { id } = req.params;
    const shift = await Shift.findById(id);
    if (!shift) {
      return res.status(404).json({ error: 'Shift not found' });
    }
    res.json(shift);
  } catch (error) {
    console.error('Error getting shift by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.updateShiftById = async (req, res) => {
  try {
    const { id } = req.params;
    const { startTime, endTime, department, requiredSkills } = req.body;
    const updatedShift = await Shift.findByIdAndUpdate(id, { startTime, endTime, department, requiredSkills }, { new: true });
    if (!updatedShift) {
      return res.status(404).json({ error: 'Shift not found' });
    }
    res.json(updatedShift);
  } catch (error) {
    console.error('Error updating shift:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.deleteShiftById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedShift = await Shift.findByIdAndDelete(id);
    if (!deletedShift) {
      return res.status(404).json({ error: 'Shift not found' });
    }
    res.json({ message: 'Shift deleted successfully' });
  } catch (error) {
    console.error('Error deleting shift:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
