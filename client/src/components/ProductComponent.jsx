import React, { Component } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col
} from 'reactstrap';

class ProductComponent extends Component {
  render() {
    const { img, price, name, weight } = this.props;

    return (
      <Card body>
        <CardImg top width="100%" src={img} alt="Product image" />
        <CardTitle>{price}</CardTitle>
        <CardText>{name}</CardText>
        <em>{weight}</em>
      </Card>
    );
  }
}

export default ProductComponent;
