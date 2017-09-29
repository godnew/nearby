/**
 * Created by godnew on 2017/9/26.
 */
import React, { Component } from 'react';
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import List from '../../components/list/list'
import {hashHistory} from 'react-router'

class Bank extends Component {
  render() {
    return (
      <div>
        <Header title="银行" right="地图" left="" rightClick={this.goMap} leftClick=""/>
        {/*<Search placeholder="搜索银行" changeFn={()=>{}}/>*/}
        <List type="银行"/>
      </div>
    );
  }
  goMap(){
     hashHistory.push('/map/'+encodeURIComponent('银行'))
  }
}

export default Bank;