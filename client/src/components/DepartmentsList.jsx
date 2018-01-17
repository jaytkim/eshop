import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import Departments from '../db/departments.json';
import '../index.css';

class DepartmentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: []
    };
  }

  componentDidMount() {
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Todo::: Fetch Departments data from backend.
    // ex) fetch('[api url]')
    //      .then(res => res.json())
    //      .then(data => {this.setState({ departments: data })})
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    const departments = Departments.data; // This is temp data from json file.
    this.setState({ departments: departments });
  }

  render() {
    return (
      <div className="department-container">
        <h4>Browse Departments</h4>

        <Row>
          {this.state.departments.map((department, index) => {
            return (
              <Col xs={6} md={3} lg={2} key={index}>
                <div className="department-component">
                  <p>{this.props.params}</p>
                  <img width="100%" alt="Department" src={department.img} />
                  <Link to={`/department/${department.id}`}>
                    {department.name}
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default DepartmentsList;
