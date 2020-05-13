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
              linkUrl: '../../assets/images/1.jpg',
            },
            {
              id: 21,
              linkUrl: '../../assets/images/21.jpg',
            },
          ],
          selectedIndex: 1,
        };
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
