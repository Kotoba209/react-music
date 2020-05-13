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
        this.showPlayer = this.showPlayer.b
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
