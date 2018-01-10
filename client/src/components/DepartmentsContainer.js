import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import '../index.css';

class DepartmentsContainer extends Component {
  render() {
    return (
      <Jumbotron className="department-container">
        <h4>Browse Departments</h4>
      </Jumbotron>
    );
  }
}

export default DepartmentsContainer;
