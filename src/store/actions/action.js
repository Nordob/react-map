import { ADD_POINT, DELETE_POINT } from "./actionTypes"

export function addPoint(location) {
	return{
		type: ADD_POINT,
		location
	}
}

export function onDeletePoint(index) {
	return{
		type: DELETE_POINT,
		index
	}
}