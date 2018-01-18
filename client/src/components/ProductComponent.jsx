import React, { Component } from 'react';
import { Col, Row, Image, Panel } from 'react-bootstrap';

// import { Card, CardTitle, CardText, CardImg } from 'reactstrap';

class ProductComponent extends Component {
  render() {
    const { img, price, name, weight } = this.props;

    return (
      <div>
        <Image src={img} rounded width="100%" />
        <h4>{price}</h4>
        <p>{name} </p>
        <p>{weight}</p>
      </div>
    );
  }
}

export default ProductComponent;

/*
<Card >
  <CardImg top width="100%" src={img} alt="Product image" />
  <CardTitle>{price}</CardTitle>
  <CardText>{name}</CardText>
  <em>{weight}</em>
</Card>
*/
