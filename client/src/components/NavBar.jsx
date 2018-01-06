import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  InputGroup,
  MenuItem,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './NavBar.css';

const NavBar = props => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <FontAwesome
            color="green"
            name="shopping-basket"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
          &nbsp; <span class="brand"> eShop </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="Stores" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>Store 1</MenuItem>
          <MenuItem eventKey={1.2}>Store 2</MenuItem>
          <MenuItem eventKey={1.3}>Store 3</MenuItem>
        </NavDropdown>
      </Nav>

      <Navbar.Form pullLeft>
        <FormGroup>
          <InputGroup>
            <FormControl id="search" type="text" placeholder="Search" />
            <InputGroup.Addon>
              <FontAwesome name="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </Navbar.Form>

      <Nav pullRight>
        <NavItem eventKey={2} href="#">
          Help
        </NavItem>
        <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
        <Button bsStyle="success" id="btn-cart">
          <FontAwesome name="shopping-cart" /> Cart
        </Button>
      </Nav>
    </Navbar.Collapse>

    <nav class="nav-tabs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/departments">Departments</Link>
        </li>
        <li>
          <Link to="/referals">Get $50</Link>
        </li>
        <li>
          <Link to="/histories">Your Items</Link>
        </li>
      </ul>
    </nav>
  </Navbar>
);

export default NavBar;
