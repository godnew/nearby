/**
 * Created by godnew on 2017/9/25.
 */
import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      value:''
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <input onChange={this.ChangeHandle.bind(this)}
               onKeyUp={this.KeyUpHandle.bind(this)}
               value={this.state.value}
               type="text"
               placeholder={this.props.placeholder}
               style={styles.input}/>
      </div>
    );
  }

  componentDidMount() {
    // 默认值
    this.setState({
      value: this.props.value || ''
    })
  }
  ChangeHandle(e) {
    // 监控变化
    this.setState({
      value: e.target.value
    })
  }
  KeyUpHandle(e) {
    // 监控 enter 事件
    if (e.keyCode !== 13) {
      return
    }
    this.props.changeFn(e.target.value)
  }
}
var styles={
  container:{
    padding: '10px',
    display: 'flex',
    height: '40px',
    alignContent: 'center'
  },
  input:{
    border: '1px solid #eee',
    width: '100%',
    padding:'10px',
    boxSizing: 'border-box',
    color: '#666'
  }
}

export default Search;