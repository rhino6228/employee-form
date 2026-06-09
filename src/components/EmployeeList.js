import React from 'react';

function EmployeeList(props) {

  return (
    <div className="employee-list">

      <h1>Employee List</h1>

      <ul>
        {props.employees.map((employee) => (
          <li key={employee.EmployeeId}>
            {employee.name} | {employee.email}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default EmployeeList;