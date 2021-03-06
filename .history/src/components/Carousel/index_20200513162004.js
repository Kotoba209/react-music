import React, { Component } from 'react';
import './index.scss';
import { Carousel } from 'antd-mobile';
import a from '../../assets/images/1.jpg';
import b from '../../assets/images/2.jpg';
import c from '../../assets/images/3.jpg';
import d from '../../assets/images/4.jpg';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [
        {
          id: 1,
          picUrl: a,
        },
        {
          id: 2,
          picUrl: b,
        },
        {
          id: 3,
          picUrl: '../../assets/images/3.jpg',
        },
        {
          id: 4,
          picUrl: '../../assets/images/4.jpg',
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
        {this.state.sliders.map((val) => (
          <a className='carousel-link' key={val.id} href='javascript(0)'>
            <img src={val.picUrl} alt='图片' />
          </a>
        ))}
      </Carousel>
    );
  }
}
