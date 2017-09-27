/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/position'

const initialState={}

export default function bank(state=initialState,action){
  switch (action.type){
    case actionTypes.POSITION_UPDATE:
      return action.data
    default:
      return state
  }
}