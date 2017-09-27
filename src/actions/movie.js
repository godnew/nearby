/**
 * Created by godnew on 2017/9/27.
 */
import * as actionTypes from '../actionsType/movie'

export function update(data){
  return {
    type:actionTypes.MOVIE_UPDATE,
    data
  }
}