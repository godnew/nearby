/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/food'

const initialState={}

export default function food(state=initialState,action){
  switch (action.type){
    case actionTypes.FOOD_UPDATE:
      return action.data
    default:
      return state
  }
}