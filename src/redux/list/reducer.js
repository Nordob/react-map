import { ADD_POINT, DELETE_POINT } from '../actionTypes';

const initialState = {
  points: [],
};

const list = (state = initialState, { type, location, pointId }) => {
  switch (type) {
    case ADD_POINT:
      return {
        ...state,
        points: [...state.points, { ...location, id: (+new Date()).toString(16) }],
      };
    case DELETE_POINT:
      return {
        ...state,
        points: [...state?.points.filter(({ id }) => id !== pointId)],
      };

    default:
      return state;
  }
};

export default list;
