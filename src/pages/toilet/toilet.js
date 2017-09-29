/**
 * Created by godnew on 2017/9/26.
 */
import React, { Component } from 'react';
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import List from '../../components/list/list'
import {hashHistory} from 'react-router'

class Toilet extends Component {
  render() {
    return (
      <div>
        <Header title="厕所" right="地图" left="" rightClick={this.goMap} leftClick=""/>
        {/*<Search placeholder="搜索厕所" changeFn={()=>{}}/>*/}
        <List type="厕所"/>
      </div>
    );
  }
  goMap(){
    hashHistory.push('/map/'+encodeURIComponent('厕所'))
  }
}

export default Toilet;