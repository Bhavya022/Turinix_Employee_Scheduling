

const express = require('express');
const router = express.Router();
const shiftController = require('../controllers/shiftController');

router.post('/', shiftController.createShift);
router.get('/', shiftController.getAllShifts);
router.get('/:id', shiftController.getShiftById);
router.put('/:id', shiftController.updateShiftById);
router.delete('/:id', shiftController.deleteShiftById);

module.exports = router;
