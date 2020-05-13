import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

export default class NavBar extends Component {
    render() {
        return (
          <ul className='nav-bar-list'>
            <li className='nav-bar-item'>
              <NavLink exact to='/' activeClassName='active'></NavLink>
            </li>
            <li className='nav-bar-item'>
              <NavLink exact to='/Singer' activeClassName='active'></NavLink>
            </li>
            <li className='nav-bar-item'>
              <NavLink exact to='/Rank' activeClassName='active'></NavLink>
            </li>
            <li className='nav-bar-item'>
              <NavLink exact to='/' activeClassName='active'></NavLink>
            </li>
          </ul>
        );
    }
}
