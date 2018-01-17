import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import NavBar from './NavBar';
import StoreFront from './StoreFront';
import DepartmentsList from './DepartmentsList';
import DepartmentsContainer from './DepartmentsContainer';
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
            <Route path="/department/:id" component={DepartmentsContainer} />
          </Switch>
        </Grid>
      </div>
    );
  }
}

export default App;
