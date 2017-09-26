/**
 * Created by godnew on 2017/9/26.
 */
import React, { Component } from 'react';
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import List from '../../components/list/list'

class Food extends Component {
  render() {
    return (
      <div>
        <Header title="餐厅" right="" left="地图" rightClick="" leftClick=""/>
        <Search placeholder="搜索餐厅" changeFn={()=>{}}/>
        <List type="餐厅"/>
      </div>
    );
  }
}

export default Food;