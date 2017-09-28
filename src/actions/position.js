/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/position'

export function update(data){
  return {
    type:actionTypes.POSITION_UPDATE,
    data:data
  }
}