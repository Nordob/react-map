import { ADD_POINT, DELETE_POINT } from '../actionTypes';

export const addPoint = (location) => ({
  type: ADD_POINT,
  location,
});

export const onDeletePoint = (pointId) => ({
  type: DELETE_POINT,
  pointId,
});
