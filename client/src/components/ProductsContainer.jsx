import React, { Component } from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import ProductComponent from './ProductComponent';
import Items from '../db/products.json';
import '../index.css';

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    /**
      items must be called from db when the request has been placed.
      This call has to make as an api call.
      When you make an api call, axios(npm package) is one option.
    **/
    let items = Items.data;
    Items.data.map(item => {
      console.log(item.department);
    });
    // set the state of products when you get items form db
    this.setState({ products: items });
  }

  render() {
    return (
      <Panel className="main-contanier">
        <Panel.Body>
          <Row>
            {this.state.products.map((product, i) => {
              return (
                <Col sm={2} key={i}>
                  <ProductComponent
                    img={product.img}
                    price={product.price}
                    name={product.name}
                    weight={product.weight}
                  />
                </Col>
              );
            })}
          </Row>
        </Panel.Body>
      </Panel>
    );
  }
}

export default ProductsContainer;
