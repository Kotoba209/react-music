import React, { Component } from 'react';
import './index.scss';
import fetch from '../../fetch';
import { Link } from 'react-router-dom';

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
              {
                  this.state.albumList.length > 0 &&
                  <h2 className="album-title">最新专辑</h2>
              }
              <ul className="album-list">
                  {
                      this.state.albumList.map(val => (
                          <li className="album-item" key={val.album_id}>
                              <Link(props)
                          </li>
                      ))
                  }
              </ul>
        </div>
    );
  }
}
