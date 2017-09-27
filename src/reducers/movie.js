/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/movie'

const initialState={}

export default function movie(state=initialState,action){
  switch (action.type){
    case actionTypes.MOVIE_UPDATE:
      return action.data
    default:
      return state
  }
}