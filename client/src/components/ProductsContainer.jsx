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
    // set the state of products when you get items form db
    this.setState({ products: items });
  }

  render() {
    return (
      <Panel className="main-contanier">
        <Panel.Body>
          {this.state.products.map((product, i) => {
            return (
              <div className="col-lg-2">
                <ProductComponent
                  img={product.img}
                  price={product.price}
                  name={product.name}
                  weight={product.weight}
                />
              </div>
            );
          })}
        </Panel.Body>
      </Panel>
    );
  }
}

export default ProductsContainer;
