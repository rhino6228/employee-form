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
        <h1>Add Employee</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Job Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;