import React, { Component } from 'react';
import NavBar from './NavBar';
import MainCarousel from './MainCarousel';
import DepartmentsContainer from './DepartmentsContainer';
// import Products from './ProductsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainCarousel />
        <DepartmentsContainer />
      </div>
    );
  }
}

export default App;
