import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import fetch from '../../fetch'

export default class index extends Component {

    componentDidMount() {
        fetch.getPlayList()
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
