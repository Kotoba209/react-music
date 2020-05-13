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
        <div className='album-component'>
          {this.state.albumList.length > 0 && (
            <h2 className='album-title'>最新专辑</h2>
          )}
          <ul className='album-list'>
            {this.state.albumList.map((val) => (
              <li className='album-item' key={val.album_id}>
                <Link to={`/AlbumInfo/${val.album_mid}`} className='album-link'>
                  <img
                    className='ablum-img'
                            src={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${val.album_mid}.jpg?max_age=2592000`}
                            alt=""
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}
