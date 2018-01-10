import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar';
// import Slider from 'react-slick';
import ProductsContainer from './ProductsContainer';
import DepartmentsContainer from './DepartmentsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProductsContainer />

        <DepartmentsContainer />
      </div>
    );
  }
}

export default App;
