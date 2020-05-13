import React, { Component } from 'react';
import './index.scss';
import musicImg from '../../assets/music_default.png';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      showSongList: false,
    };
    this.playMusic = this.playMusic.bind(this);
    this.showSongList = this.showSongList.bind(this);
    this.hideSongList = this.hideSongList.bind(this);
    this.hidePlayer = this.hidePlayer.bind(this);
    this.showPlayer = this.showPlayer.bind(this);
  }

  // 播发/暂停
  playMusic() {
    if (this.props.currentSong.url && this.props.currentSong.songmid) {
      this.props.parentPlayMusic();
    }
  }

  // 设置播放进度
  setMusicProgress(duration) {
    if (this.props.tottalDuration === 0) {
      return 0;
    } else {
      return Math.floor((duration / this.props.tottalDuration) * 100);
    }
  }

  // 显示歌曲播放列表
  showSongList() {
    if (this.props.currentSong.url && this.props.currentSong.songmid) {
      this.setState({
        showSongList: true,
      });
    }
  }

  // 隐藏歌曲列表
  hideSongList() {
    this.setState({
      showSongList: false,
    });
  }

  // 隐藏播放器
  hidePlayer() {
    this.setState({
      showPlayer: false,
    });
  }

  // 显示播放器
  showPlayer() {
    if (this.props.currentSong.url && this.props.currentSong.songmid) {
      this.props.parentShowPlayer();
    }
  }

  render() {
    let currentSong = this.props.currentSong;
    let playStatus = this.props.playStatus;
    return (
      <div>
        <div className='miniplay-component'>
          <div className='song-info' onClick={this.showPlayer}>
            <div
              className={
                'song-img ' + (playStatus == 1 ? 'running' : 'paused')
              }>
              <img
                src={currentSong.albumpic ? currentSong.albumpic : musicImg}
                alt=''
              />
            </div>
            {currentSong.url && currentSong.songmid && (
              <div className='song-name-lyrics'>
                <div className='song-name'>{currentSong.name}</div>
                <div className='song-lyrics'>
                  {this.props.playStatus == 1 &&
                    this.props.lyricsList.length > 0 && (
                      <ul
                        className={
                          'song-lyrics-list ' +
                          (this.props.lyricIndex > 0 ? 'transition' : '')
                        }
                        style={{
                          transform: `translateY(${
                            -18 * this.props.lyricIndex
                          }px)`,
                        }}>
                        {this.props.lyricsList.map((val, index) => (
                          <li
                            className={
                              'song-lyrics-item ' +
                              (this.props.lyricIndex === index ? 'current' : '')
                            }
                            key={index}>
                            {val[1]}
                          </li>
                        ))}
                      </ul>
                    )}
                  {(this.props.playStatus == 0 ||
                    this.props.lyricsList.length === 0) && (
                    <p className='song-singer'>{currentSong.singer}</p>
                  )}
                </div>
              </div>
            )}
            {!(currentSong.url && currentSong.songmid) && (
              <p className='song-empty'>听我想听的歌</p>
            )}
          </div>
          <div className='operate-group'>
            <div className='play-control'>
              {playStatus == 1 && (
                <i className='iconfont icon-stop' onClick={this.playMusic} />
              )}
              {playStatus == 0 && (
                <i className='iconfont icon-play' onClick={this.playMusic} />
              )}
            </div>
            <div className='song-list'>
              <i className='iconfont icon-list' onClick={this.showSongList} />
            </div>
          </div>
          <div
            className='song-progress'
            style={{
              width: `${this.setMusicProgress(currentSong.currentDuration)}%`,
            }}
          />
        </div>
      </div>
    );
  }
}
