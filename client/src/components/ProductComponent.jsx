import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

// import { Card, CardTitle, CardText, CardImg } from 'reactstrap';

class ProductComponent extends Component {
  render() {
    const { item_id, img, price, name, weight } = this.props;

    return (
      <div>
        <Link to={`/items/${item_id}`}>
          <Image src={img} rounded width="100%" />
          <h4>{price}</h4>
          <p>{name} </p>
          <em>{weight}</em>
        </Link>
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
