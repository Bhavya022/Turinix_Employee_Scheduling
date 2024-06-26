# Turinix_Employee_Scheduling

This project is an API for managing employee schedules in a retail store chain. It provides endpoints for employee management, shift management, and employee scheduling.

## Features

- **Employee Management**:
  - Create, retrieve, update, and delete employees.
  - Define recurring availability patterns for employees.

- **Shift Management**:
  - Create, retrieve, update, and delete shifts.
  - Handle overlapping shifts and conflicts with employee availability.

- **Employee Scheduling**:
  - Assign shifts to employees based on availability and skills.
  - Optimize staffing based on predicted customer demand.
  - Generate alerts for potential scheduling conflicts.

- **User Routes Logger**:
  - Middleware function logs information about incoming requests to user endpoints.
  - Provides insights into user activity and API usage.
  - Helps track user interactions and debug potential issues.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:

git clone https://github.com/your-username/turinix-employee-scheduling.git

2. Navigate to the project directory:

cd turinix-employee-scheduling

3. Install dependencies:

npm install

4. Set up environment variables by creating a `.env` file in the root directory and add the following:

MONGODB_URL=mongodb+srv://your-username:your-password@cluster0.kin5ecd.mongodb.net/Turinix_Employee_Schedulingdb?retryWrites=true&w=majority
PORT=8080

5. Start the server:

npm start

## API Documentation

- **Employee Endpoints**:
  - `POST /employees`: Create a new employee.
  - `GET /employees`: Retrieve all employees.
  - `GET /employees/{id}`: Retrieve a specific employee by ID.
  - `PUT /employees/{id}`: Update an existing employee by ID.
  - `DELETE /employees/{id}`: Delete an employee by ID.

- **Shift Endpoints**:
  - `POST /shifts`: Create a new shift.
  - `GET /shifts`: Retrieve all shifts.
  - `GET /shifts/{id}`: Retrieve a specific shift by ID.
  - `PUT /shifts/{id}`: Update an existing shift by ID.
  - `DELETE /shifts/{id}`: Delete a shift by ID.

- **User Endpoints**:
  - `POST /auth/register`: Register a new user.
  - `POST /auth/login`: Login with existing credentials.
  - `GET /auth/logout`: Logout the user.

## Contributing

Contributions are welcome! Please create a pull request for any improvements or features you'd like to add.

## Deployed Link
[Demo Deployment](https://turinix-employee-scheduling.onrender.com/)
