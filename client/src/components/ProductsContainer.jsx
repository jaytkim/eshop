import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
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
    const items = Items.data;
    const id = this.props.id;

    console.log('PC id: ', id);

    let products = items.filter(item => {
      return item.department.id == id;
    });

    console.log(products);
    // set the state of products when you get items form db
    this.setState({ products: products });
  }

  // dispatching an action based on state change
  // This will loaded only params of url has been changed.
  // ie) localhost/products/1
  //     localhost/products/2
  //  ==> These two have same routes. Even if the params of products has been changed,
  //    the component will not mount. In order to make working these link seperatly,
  //    we need to call compnentWillReceiveProps
  // Todo::: Setup has to be same as componentDidMount
  componentWillReceiveProps(nextProps) {
    const items = Items.data;

    let products = items.filter(item => {
      return item.department.id == nextProps.id;
    });

    // set the state of products when you get items form db
    this.setState({ products: products });
  }

  render() {
    return (
      <Panel className="main-contanier">
        <Panel.Body>
          {this.state.products.map((product, i) => {
            return (
              <div
                className="col-lg-2 col-md-3 col-sm-4 col-xs-6 product"
                key={i}
              >
                <ProductComponent
                  item_id={product.item_id}
                  img={product.img}
                  price={product.price}
                  name={product.name}
                  weight={product.weight}
                  key={i}
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
