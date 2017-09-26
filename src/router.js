/**
 * Created by godnew on 2017/9/26.
 */
import React from 'react'
import { Router, Route ,IndexRoute,browserHistory,Link} from 'react-router'
import App from './App'
import Food from './pages/food/food'
import Movie from './pages/movie/movie'
import Bank from './pages/bank/bank'
import Toilet from './pages/toilet/toilet'

export default function router(){
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Food}/>
        <Route path="food" component={Food} />
        <Route path="movie" component={Movie} />
        <Route path="bank" component={Bank} />
        <Route path="toilet" component={Toilet} />
      </Route>
    </Router>
  );
}