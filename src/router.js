/**
 * Created by godnew on 2017/9/26.
 */
import React from 'react'
import { Router, Route ,browserHistory} from 'react-router'
import App from './App'
import Food from './pages/food/food'
import Movie from './pages/movie/movie'
import Bank from './pages/bank/bank'
import Toilet from './pages/toilet/toilet'
import Main from './pages/main'

export default function router(){
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="main" component={Main}>
          <Route path="food" component={Food} />
          <Route path="movie" component={Movie} />
          <Route path="bank" component={Bank} />
          <Route path="toilet" component={Toilet} />
        </Route>
      </Route>
    </Router>
  );
}