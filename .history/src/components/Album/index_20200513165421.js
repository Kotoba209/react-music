import React, { Component } from 'react';
import './index.scss';
import fetch from '../../fetch';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumList: [],
    };
  }
  componentDidMount() {
    fetch.getLatestAlbum().then((res) => {
      this.setState({
        albumList: res.albumlib.data.list,
      });
    });
  }

  render() {
      return (
          <div className="album-component">
              
        </div>
    );
  }
}
