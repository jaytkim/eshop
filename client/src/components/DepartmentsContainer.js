import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Jumbotron, Col, Row, Panel } from 'react-bootstrap';
import '../index.css';

class DepartmentsContainer extends Component {
  render() {
    const departments = [
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/produce-c32a1b0a1cb2c7b4c49299ba96ad4c42f606eaba0beb56b5a4c4c3cf06b5c772.jpg',
        name: 'Produce'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/dairy-eggs-8f303a84849def2dde1cb8665ab30ae138936a2797e9ea5a72829f1fc48cae40.jpg',
        name: 'Daily & Eggs'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/snacks-a4ccba9a90b6bd0d2be05765b1d41d0bba43461c4b902cf9747279155db9e476.jpg',
        name: 'Snacks'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/pantry-1dd63b6d972a718189696437400f2b247e09710cd8060d616495a93c81b76ad7.jpg',
        name: 'Pantry'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/bulk-58b979681c823d510c32236cfdf0964a36a039a9b05e7522e0a34484001dcd86.jpg',
        name: 'Bulk'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/beverages-b62958d0228583e6496387f273dba59adfe3b392137d87f74f8e5ab578b17bed.jpg',
        name: 'Beverages'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/meat-seafood-830f973e3a724c0bcd0d35b1498fdbe6cec258f4ab063dd6d2cc1f751fc9a897.jpg',
        name: 'Meat & Seafood'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/bakery-bdcb8fb869bf2ef66b2f5f8b9a47655ceaf5bbf47b99690d3ce1c512178ea335.jpg',
        name: 'Bakery'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/frozen-fc4ae56a4e268b330349f33ba888b903d15ce4e0fe7bdbdf8c112e07d9306804.jpg',
        name: 'Frozen'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/deli-df0e4d3c3c7b5571dd0a3e16a74991f71647023419f8fab447d72ea469c46295.jpg',
        name: 'Deli'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/household-d9d2c076b670f2008be3d8b94b889892ddb9f73038ea8e19b2fcfec1e5ffdaab.jpg',
        name: 'Household'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/canned-goods-dcc5c36ae38df163b8ed3ffea02345973f6269b87a959b4ebcdc78e56a3853c3.jpg',
        name: 'Canned Goods'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/dry-goods-pasta-970af8ec0ae167c8d56c2be29aa4c0df9c316f1d5128314fd9a7496d98137331.jpg',
        name: 'Dry Goods & Pasta'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/international-9902cc9a734b4b1ed0e0b171d4070c8b1e725b6aaa3ca29fc962d1d9620f6a5d.jpg',
        name: 'International'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/breakfast-cfc2cfd42ff704eb07849c59638178a7d14721b35d9ed9b8d279cee94a805185.jpg',
        name: 'Breakfast'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/personal-care-c3402f312ab6ca7fdfd1301c67b788d00790f118e290c8e282da4af3ab4ab45d.jpg',
        name: 'Personal Care'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/babies-14d2e3b77c47c4c84faa210d89fa10a0fe4b8c37c1ccaf3f35c12a772750247d.jpg',
        name: 'Babies'
      },
      {
        img:
          'https://d2guulkeunn7d8.cloudfront.net/assets/department_images/pets-4f2bb04f73c3270f35f474f9cf231e67ec196615923bed068a0df4cd4f977293.jpg',
        name: 'Pets'
      }
    ];
    return (
      <Jumbotron className="department-container">
        <h4>Browse Departments</h4>

        <Row>
          {departments.map((department, index) => {
            return (
              <Col xs={6} md={3} lg={2}>
                <div className="department-component">
                  <img width="100%" src={department.img} />
                  <Link to="/">{department.name}</Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Jumbotron>
    );
  }
}

export default DepartmentsContainer;
