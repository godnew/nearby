/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/toilet'

export function update(data){
  return {
    type:actionTypes.TOILET_UPDATE,
    data
  }
}