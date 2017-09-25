import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Search from './components/search/search'
import List from './components/list/list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="电影" right="" left="地图" rightClick="" leftClick=""/>
        <Search placeholder="搜索电影院" changeFn={()=>{}}/>
        <List/>
      </div>
    );
  }
}

export default App;
