import React, { Component } from 'react'
import './App.scss'
import NavBar from './components/NavBar/NavBar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Music</h1>
          <i className="iconfont icon-explain" onClick={()=> this.showModal(true)}></i>
        </header>
        <NavBar />
        {
          
        }
      </div>
    )
  }
}
