import React, { Component } from 'react';
import './index.scss';
import { Carousel } from 'antd-mobile';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [
        {
          id: 1,
          linkUrl: '../../assets/images/1.jpg',
        },
        {
          id: 2,
          linkUrl: '../../assets/images/2.jpg',
        },
        {
          id: 3,
          linkUrl: '../../assets/images/3.jpg',
        },
        {
          id: 4,
          linkUrl: '../../assets/images/4.jpg',
        },
      ],
      selectedIndex: 1,
    };
  }
  render() {
    return (
      <Carousel
        className='carousel-component'
        autoplay
        infinite
            selectedIndex={this.state.selectedIndex}>
            
        </Carousel>
    );
  }
}
