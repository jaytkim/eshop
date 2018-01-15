import React, { Component } from 'react';
import ProductComponent from './ProductComponent';

import { Carousel, Col, Row, Panel } from 'react-bootstrap';

class ProductListContainer extends Component {
  render() {
    const { products } = this.props;
    console.log(products.length);

    return (
      <Panel className="main-contanier">
        <Panel.Body>
          <h4>New Arrivals</h4>

          <Carousel>
            <Carousel.Item>
              <Row>
                {products.map((product, index) => {
                  return (
                    <Col xs={6} md={3} lg={2}>
                      <ProductComponent
                        img={product.img}
                        price={product.price}
                        name={product.name}
                        weight={product.weight}
                        key={index}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                {products.map((product, index) => {
                  return (
                    <Col xs={6} md={3} lg={2}>
                      <ProductComponent
                        img={product.img}
                        price={product.price}
                        name={product.name}
                        weight={product.weight}
                        key={index}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
          </Carousel>
        </Panel.Body>
      </Panel>
    );
  }
}

export default ProductListContainer;
