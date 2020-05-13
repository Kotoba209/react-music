import React, { Component } from 'react';
import './index.scss';
import CarouselComponent from '../../components/Carousel';
import Album from '../../components/Album/Album';

export default class Recommend extends Component {
  render() {
    return (
      <div>
        <CarouselComponent />
      </div>
    );
  }
}
