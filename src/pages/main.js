/**
 * Created by godnew on 2017/9/26.
 */
import React, { Component } from 'react';
import Footer from '../components/footer/footer'

class Main extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Main;
