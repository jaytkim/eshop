import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const NavBar = props => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <FontAwesome
            color="green"
            name="shopping-cart"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
          &nbsp; eShop
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Nav>
      <NavItem eventKey={1}>
        <Link to="/products">Products</Link>
      </NavItem>

      <NavItem eventKey={2}>
        <Link to="/clients">Clients</Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;
