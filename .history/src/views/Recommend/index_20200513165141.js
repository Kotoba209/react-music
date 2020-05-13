import React, { Component } from 'react';
import './index.scss';
import CarouselComponent from '../../components/Carousel';
import Album from '../../components/Album';

export default class Recommend extends Component {
    constructor(props) {
        super()
    }
  render() {
    return (
      <div>
            <CarouselComponent />
            <Album/>
      </div>
    );
  }
}
