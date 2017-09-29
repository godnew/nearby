/**
 * Created by godnew on 2017/9/26.
 */
import React from 'react'
import { Router, Route ,hashHistory,IndexRedirect} from 'react-router'
import App from './App'
import Food from './pages/food/food'
import Movie from './pages/movie/movie'
import Bank from './pages/bank/bank'
import Toilet from './pages/toilet/toilet'
import Main from './pages/main'
import Map from './pages/map/map'
import Detail from './pages/detail/detail'

export default function router(){
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/main/food" />
        <Route path="main" component={Main}>
          <Route path="food" component={Food} />
          <Route path="movie" component={Movie} />
          <Route path="bank" component={Bank} />
          <Route path="toilet" component={Toilet} />
        </Route>
        <Route path="map(/:type)" component={Map}/>
        <Route path="detail(/:id)" component={Detail}/>
      </Route>
    </Router>
  );
}