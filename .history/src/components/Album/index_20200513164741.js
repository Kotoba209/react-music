import React, { Component } from 'react';
import './index.scss'
import fetch from '../../fetch';

export default class Album extends Component {


    componentDidMount() {
        fetch.getLatestAlbum()
        <div className="then"></div>
    }

  render() {
    return <div></div>;
  }
}
