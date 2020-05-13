import React, { Component } from 'react'
import './index.scss'
import musicImg from '../../assets/music_default.png'

export default class index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            timer: null,
            showSongList: false
        }
        this.playMusic = this.playMusic.bind(this)
        this.showSongList = this.showSongList.bind(this)
        this.hideSongList = this.hideSongList.bind(this)
        this.hidePlayer = this.hidePlayer.bind(this)
        this.showPlayer = this.showPlayer.bind(this)
    }

    // 播发/暂停
    playMusic() {
        if (this.props.currentSong.url && this.props.currentSong.songmid) {
            this.props.parentPlayMusic()
        }
    }

    // 设置播放进度
    setMusicProgress(duration) {
        if (this.props.tottalDuration === 0) {
            return 0
        } else {
            return Math.floor(duration / this.props.tottalDuration * 100)
        }
    }

    // 显示歌曲播放列表
    showSongList() {
        if (this.props.currentSong.url && this.props.currentSong.songmid) {
            this.setState({
                showSongList: true
            })
        }
    }

    // 隐藏歌曲列表
    hideSongList() {
        this.setState({
            showSongList: false
        })
    }

    // 隐藏播放器
    hidePlayer() {
        this.setState({
            showPlayer: false
        })
    }

    // 显示播放器
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
