
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authController = require('../controllers/authController');

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployeeById);
router.delete('/:id', employeeController.deleteEmployeeById);
router.use(authController.verifyToken);
module.exports = router;
