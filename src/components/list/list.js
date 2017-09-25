/**
 * Created by godnew on 2017/9/25.
 */
import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li style={styles.list}>
            <div style={styles.item}>
              <span>1</span>
              <span>2</span>
            </div>
            <div style={styles.item}>
              <span>3</span>
              <span>4</span>
            </div>
            <div style={styles.phone}>
              电话
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

var styles={
  list:{
    borderTop: '10px solid #eee',
    padding: '0 10px'
  },
  item:{
    display: 'flex',
    justifyContent: 'space-between',
    padding:' 10px 0px',
    color:'#666'
  },
  text:{

  },
  phone:{
    lineHeight: '30px',
    border: '1px solid #eee',
    borderRadius: '2px'
  }
}

export default List;