/**
 * Created by godnew on 2017/9/26.
 */
import React, { Component } from 'react';
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import List from '../../components/list/list'
import {hashHistory} from 'react-router'

class Movie extends Component {
  render() {
    return (
      <div>
        <Header title="电影院" right="地图" left="" rightClick={this.goMap} leftClick=""/>
        {/*<Search placeholder="搜索电影院" changeFn={()=>{}}/>*/}
        <List type="电影院"/>
      </div>
    );
  }
  goMap(){
    hashHistory.push('/map/'+encodeURIComponent('电影院'))
  }
}

export default Movie;