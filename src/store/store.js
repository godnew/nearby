/**
 * Created by godnew on 2017/9/27.
 */
import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState){
  return createStore(rootReducer,initialState)
}