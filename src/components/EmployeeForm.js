import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.title ||
      !this.state.department
    ) {
      alert('Please complete all fields.');
      return;
    }

    this.props.addEmployee(this.state);

    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
    });
  };

  render() {
    return (
      <div className="employee-form-container">
        <h2>Add Employee</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter employee name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter employee email"
            />
          </div>

          <div className="form-group">
            <label>Job Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Enter job title"
            />
          </div>

          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              placeholder="Enter department"
            />
          </div>

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;