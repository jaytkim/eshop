import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Jumbotron>
          <Grid>
            <h1>Welcome to eShop</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
