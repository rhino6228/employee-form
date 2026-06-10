import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './EmployeeForm.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedEmployees =
      JSON.parse(localStorage.getItem('employees')) || [];

    setEmployees(savedEmployees);
  }, []);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      EmployeeId: Date.now()
    };

    const updatedEmployees = [...employees, newEmployee];

    setEmployees(updatedEmployees);

    localStorage.setItem(
      'employees',
      JSON.stringify(updatedEmployees)
    );
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Employee Management System</h1>
        <p>INT 304 Final Project</p>
      </header>

      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;