import React, { Component } from 'react'
import './index.scss'
import { Carousel } from 'antd-mobile'

export default class index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            sliders: [
                {
                    id: 1,
                    linkUrl: '../../assets/images/'
                }
            ],
            selectedIndex: 1
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
