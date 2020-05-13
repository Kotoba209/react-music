import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              {
                  this.state.albumList.length > 0 &&
                  <h2 className="album-title">最新专辑</h2>
              }
              <ul className="album-list">
                  {
                      this.state.albumList.map(val => (
                          <li className="album-item" key={val.album_id}>
                              <Link to={``}></Link>
                          </li>
                      ))
                  }
              </ul>
        </div>
    );
  }
}
