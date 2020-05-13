import React, { Component } from 'react'
import './App.scss'
import NavBar from './components/NavBar/NavBar'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isShowModal: false
    }
    this.showModal = this.isShowModal.bind(this)
  }

  showModal

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>React Music</h1>
          <i
            className='iconfont icon-explain'
            onClick={() => this.showModal(true)}></i>
        </header>
        <NavBar />
        {this.state.isShowModal && (
          <section className='modal-mask'>
            <div className='modal'>
              <div className='modal-title'>项目说明</div>
              <div className='modal-content'>
                <p className='modal-content-item'>
                  使用React全家桶开发的音乐WebApp。数据来源于QQ音乐的API，UI参考QQ音乐。
                </p>
                <p className='modal-content-item'>
                  <a href='javascript(0)'>
                    Talk is cheap. Show me the code.
                  </a>
                </p>
              </div>
              <div className="modal-footer" onClick={() => this.showModal(false)}>关闭</div>
            </div>
          </section>
        )}
      </div>
    );
  }
}
