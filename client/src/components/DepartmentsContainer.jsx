import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import ProductsContainer from './ProductsContainer';
import SideBar from './SideBar';

import Departments from '../db/departments.json';
import '../index.css';

class DepartmentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      name: '',
      id: 0
    };
  }

  // This will load data before the component has been mounted.
  componentWillMount() {
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Todo::: Fetch Departments data from backend.
    // ex) fetch('[api url]')
    //      .then(res => res.json())
    //      .then(data => {this.setState({ departments: data })})
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    const departments = Departments.data; // This is temp data from json file.
    let id = this.props.match.params.id;

    let name = departments.find(department => {
      return department.id == id;
    }).name;

    this.setState({ departments: departments, id: id, name: name });
  }

  // dispatching an action based on state change
  // This will loaded only params of url has been changed.
  // ie) localhost/products/1
  //     localhost/products/2
  //  ==> These two have same routes. Even if the params of products has been changed,
  //    the component will not mount. In order to make working these link seperatly,
  //    we need to call compnentWillReceiveProps
  // Todo::: Setup has to be same as componentWillMount
  componentWillReceiveProps(nextProps) {
    const departments = Departments.data; // This is temp data from json file.
    let id = nextProps.match.params.id;

    let name = departments.find(department => {
      return department.id == id;
    }).name;

    this.setState({ departments: departments, id: id, name: name });
  }

  render() {
    console.log(this.state.id);
    return (
      <div>
        <Row>
          <Col xs={12} sm={2} md={3} lg={2}>
            <SideBar />
          </Col>
          <Col xs={12} sm={10} md={9} lg={10}>
            <h1>{this.state.name}</h1>
            <ProductsContainer id={this.state.id} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DepartmentsContainer;
