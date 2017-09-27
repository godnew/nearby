/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/toilet'

const initialState={}

export default function toilet(state=initialState,action){
  switch (action.type){
    case actionTypes.TOILET_UPDATE:
      return action.data
    default:
      return state
  }
}