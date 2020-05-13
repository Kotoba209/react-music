import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

export default class NavBar extends Component {
    render() {
        return (
            <ul className="nav-bar-list">
                <li className="nav-bar-item">
                    <NavLink exact to="/"></NavLink>
                </li>
            </ul>
        )
    }
}
