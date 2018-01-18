import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Products from './ProductsContainer';

import Departments from '../db/departments.json';
import '../index.css';

class DepartmentsContainer extends Component {
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
      <div>
        <Row>
          <Col xs={12} sm={2} md={3} lg={2}>
            <h4>Departments</h4>
            Side Bar
          </Col>
          <Col xs={12} sm={10} md={9} lg={10}>
            <h1>Produce</h1>
            <Products />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DepartmentsContainer;
