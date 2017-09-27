/**
 * Created by godnew on 2017/9/27.
 */
import {combineReducers} from 'redux'
import bank from './bank'
import food from './food'
import movie from './movie'
import toilet from './toilet'

export default combineReducers({
  bank,
  food,
  movie,
  toilet
})