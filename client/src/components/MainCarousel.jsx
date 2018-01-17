import React, { Component } from 'react';

import { Carousel, Panel } from 'react-bootstrap';

class MainCarousel extends Component {
  render() {
    let images = [
      {
        url:
          'https://www.aldi.com.au/fileadmin/_processed_/9/f/csm_ALC6158_KVB_Groceries_1896x720_f90648edde.jpg'
      },
      {
        url:
          'http://images.newindianexpress.com/uploads/user/imagelibrary/2017/3/28/original/Meat.jpg'
      },
      {
        url:
          'https://i0.wp.com/www.incito.com/wp-content/uploads/2016/06/seafood.jpg'
      }
    ];

    return (
      <Panel>
        <Panel.Body>
          <Carousel>
            {images.map((img, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    width="100%"
                    height="auto"
                    alt="carousel images"
                    src={img.url}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Panel.Body>
      </Panel>
    );
  }
}

export default MainCarousel;
