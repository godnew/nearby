/**
 * Created by godnew on 2017/9/25.
 */
import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div>
          <span onClick={this.props.leftClick?this.props.leftClick:()=>{return false}}>{this.props.left}</span>
        </div>
        <div>
          <span className="header-title">{this.props.title}</span>
        </div>
        <div className="tr wh">
          <span onClick={this.props.rightClick?this.props.rightClick:()=>{return false}}>{this.props.right}</span>
        </div>
      </div>
    );
  }
}

export default Header;