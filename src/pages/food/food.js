/**
 * Created by godnew on 2017/9/26.
 */
import React, { Component } from 'react';
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import List from '../../components/list/list'
import {hashHistory} from 'react-router'

class Food extends Component {
  render() {
    return (
      <div>
        <Header title="餐厅" right="地图" left="" rightClick={this.goMap} leftClick=""/>
        {/*<Search placeholder="搜索餐厅" changeFn={()=>{}}/>*/}
        <List type="餐厅"/>
      </div>
    );
  }
  goMap(){
    hashHistory.push('/map/'+encodeURIComponent('餐厅'))
  }
}

export default Food;