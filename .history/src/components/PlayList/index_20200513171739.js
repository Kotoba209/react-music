import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import fetch from '../../fetch'

export default class index extends Component {

    constructor (props) {
        super(props)
        this.state = {
            playList: []
        }
    }

    componentDidMount() {
        fetch.getPlayList()
            .then(res => {
            // console.log(res, '<-res->');
                this.setState({
                  playList: res.recomPlaylist.data.v_hot.slice(0, 12),
                });
        })
    }
    render() {
        return (
            <div className="playlist-component">
                {
                    this.state.playList.length > 
                }
            </div>
        )
    }
}
