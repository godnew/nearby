/**
 * Created by godnew on 2017/9/26.
 */
import React, { Component } from 'react';
import {Link} from 'react-router'
import './footer.css'
class Foot extends Component {
  render() {
    return (
      <div>
        <ul style={styles.container}>
          <li style={styles.item}><Link style={styles.link} to="/main/food" activeClassName="footer-item-active">餐厅</Link></li>
          <li style={styles.item}><Link style={styles.link} to="/main/movie"  activeClassName="footer-item-active">电影院</Link></li>
          <li style={styles.item}><Link style={styles.link} to="/main/bank" activeClassName="footer-item-active">银行</Link></li>
          <li style={styles.item}><Link style={styles.link} to="/main/toilet" activeClassName="footer-item-active">厕所</Link></li>
        </ul>
      </div>
    );
  }
}

var styles={
  container:{
    position:'fixed',
    bottom:'0',
    left:'0',
    width:'100%',
    height:'40px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    color:'#fff',
    backgroundColor:'#5FD9CD'
  },
  item:{
    flex: '1',
    height:'100%',
    lineHeight:'40px'
  },
  link:{
    display:'block',
    width:'100%',
    height:'100%',
    color:"#fff"
  }
}

export default Foot;
