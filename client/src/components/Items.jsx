import React, { Component } from 'react';
import NavBar from './NavBar';
import Products from '../db/products.json';
import {
  Form,
  FormControl,
  Button,
  Breadcrumb,
  Col,
  Row,
  Image
} from 'react-bootstrap';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }

  componentWillMount() {
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Todo::: Fetch Items data from backend.
    // ex) fetch('[api url]')
    //      .then(res => res.json())
    //      .then(data => {this.setState({ departments: data })})
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    const products = Products.data; // This is temp data from json file.
    var id = this.props.match.params.id;
    var item = products.find(product => {
      return product.item_id === id;
    });

    this.setState({ item: item });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Breadcrumb>
          <Breadcrumb.Item href="/browse">Departments</Breadcrumb.Item>
          <Breadcrumb.Item
            href={`/departments/${this.state.item.department.id}`}
          >
            {this.state.item.department.name}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {this.state.item.aisles.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={5}>
            <Image src={this.state.item.img} rounded width="100%" />
          </Col>
          <Col lg={7}>
            <h3>{this.state.item.name}</h3>
            <h2>{this.state.item.price}</h2>
            <em>{this.state.item.weight}</em>
            <br />
            <br />

            <Form inline>
              <FormControl type="text" placeholder="QTY" />
              <Button bsStyle="primary" type="submit">
                + Add to Cart
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Items;
