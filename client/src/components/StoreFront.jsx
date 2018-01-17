import React, { Component } from 'react';
import NavBar from './NavBar';
import MainCarousel from './MainCarousel';
import DepartmentsList from './DepartmentsList';
// import Products from './ProductsContainer';

class StoreFront extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainCarousel />
        <DepartmentsList />
      </div>
    );
  }
}

export default StoreFront;
