import { ADD_POINT, DELETE_POINT, UPDATE_LIST } from './actionTypes'

export function addPoint(location) {
  return {
    type: ADD_POINT,
    location,
  }
}

export function onDeletePoint(index) {
  return {
    type: DELETE_POINT,
    index,
  }
}

export function onUpdateList(list) {
  return {
    type: UPDATE_LIST,
    list,
  }
}
