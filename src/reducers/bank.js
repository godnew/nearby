/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/bank'

const initialState={}

export default function bank(state=initialState,action){
  switch (action.type){
    case actionTypes.BANK_UPDATE:
      return action.data
    default:
      return state
  }
}