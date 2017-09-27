/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/bank'

export function update(data){
  return {
    type:actionTypes.BANK_UPDATE,
    data
  }
}