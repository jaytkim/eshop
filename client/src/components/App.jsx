import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import NavBar from './NavBar';
import StoreFront from './StoreFront';
import DepartmentsList from './DepartmentsList';
import DepartmentsContainer from './DepartmentsContainer';
import Items from './Items';
// import Products from './ProductsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <Switch>
            <Route path="/" exact component={StoreFront} />
            <Route path="/browse" component={DepartmentsList} />
            <Route path="/departments/:id" component={DepartmentsContainer} />
            <Route path="/items/:id" component={Items} />
          </Switch>
        </Grid>
      </div>
    );
  }
}

export default App;
