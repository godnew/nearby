/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/food'

export function update(data){
  return {
    type:actionTypes.FOOD_UPDATE,
    data
  }
}