import { ADD_POINT, DELETE_POINT, UPDATE_LIST } from '../actions/actionTypes'

const initialState = {
  points: [],
}

export default function rootReduser(state = initialState, action) {
  switch (action.type) {
    case ADD_POINT:
      return {
        ...state,
        points: [...state.points, action.location],
      }
    case DELETE_POINT:
      return {
        ...state,
        points: state.points
          .slice(0, action.index)
          .concat(state.points.slice(action.index + 1)),
      }

    case UPDATE_LIST:
      return {
        ...state,
        points: state.points.splice().concat(action.list),
      }

    default:
      return state
  }
}
