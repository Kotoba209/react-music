import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import fetch from '../../fetch'

export default class index extends Component {

    constructor() {}

    componentDidMount() {
        fetch.getPlayList()
            .then(res => {
            console.log(res, '<-res->');
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
