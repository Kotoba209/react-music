import React, { Component } from 'react';
import './index.scss'
import fetch from '../../fetch';

export default class Album extends Component {


    componentDidMount() {
        fetch.getLatestAlbum()
        .then
    }

  render() {
    return <div></div>;
  }
}
