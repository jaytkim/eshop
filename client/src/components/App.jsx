import React, { Component } from 'react';
// import { Grid, Jumbotron, Button } from 'reactstrap';
// import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar';
// import Slider from 'react-slick';
import ProductsContainer from './ProductsContainer';

import ProductListContainer from './ProductListContainer';

import DepartmentsContainer from './DepartmentsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    let items = [
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e567bde2-e681-4f99-a9ea-206fa4a1a33d.png',
        price: '$2.70',
        name: 'Green Giant Simply Steam Summer Sweet Peas With Butter Sauce',
        weight: '250 g'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_12e92757-cc3d-4d97-aa04-d562728d9b55.png',
        price: '$2.70',
        name: 'North Coast Naturals Organic Brown Rice Protein Powder',
        weight: '340 g'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1627b336-e748-43ab-b15c-b3c35d811696.png',
        price: '$2.70',
        name: "President's Choice Organic Strawberry Rice Rusk",
        weight: '60 g'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_14889cff-57a6-44c2-9d9d-b06746e1c078.png',
        price: '$2.70',
        name: 'Gaviscon Cherry Extra Strength Chewable Tablet',
        weight: '60 ct'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_39c91651-4c4a-4a81-8513-1603182f253d.png',
        price: '$2.70',
        name: 'Ener C Peach Mango Vitamin C Effervescent Powdered Drink Mix',
        weight: '289 g'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_640443e3-f726-473a-9e25-f7a7b1149852.png',
        price: '$2.70',
        name: "Mott's Fruitsations Assorted Fruit & Vegetable Snacks",
        weight: '226 g'
      }
    ];

    this.setState({ products: items });
  }

  render() {
    let items = [
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1b707601-aacd-4027-9e5e-0bf873088e5e.png',
        price: '$6.50',
        name: 'Glutino Gluten Free Blueberry Breakfast Bar',
        weight: '200 g'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bec66419-8d50-4f28-9486-3db3d8a9dc6f.png',
        price: '$12.05',
        name: 'No Name Baked Beans Tomato Sauce',
        weight: '4776 ml'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1566d36e-98d8-421d-b6b3-6fa43908a72c.png',
        price: '$6.55',
        name: 'Sable & Rosenfeld Hot Pepper Rum Tipsy Jerk Marinade',
        weight: '340 ml'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c37cba5b-3116-4dbe-9854-3cc14f25a349.png',
        price: '$2.49',
        name: 'Pc Regular White Whole Mushrooms',
        weight: '27 g'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2f469dd2-921a-4ee4-ac06-2f598956e967.png',
        price: '$1.99',
        name: 'Yellow Onion Bag',
        weight: '3 lbs'
      },
      {
        img:
          'https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_44ab4eac-1878-4a27-baaa-7dfa30c590d9.png',
        price: '$1.58',
        name: 'Green Cabbage',
        weight: 'each'
      }
    ];
    return (
      <div>
        <NavBar />

        <ProductListContainer products={this.state.products} items={items} />

        <DepartmentsContainer />
      </div>
    );
  }
}

export default App;
