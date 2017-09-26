/**
 * Created by godnew on 2017/9/26.
 */
import React, { Component } from 'react';
import Footer from '../components/footer/footer'

class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

var styles={
  container:{
    paddingTop:'40px',
    paddingBottom:'40px'
  }
}
export default Main;
