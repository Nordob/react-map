import { ADD_POINT, DELETE_POINT } from '../actions/actionTypes'

const initialState= {
	points: []
}

export default function rootReduser(state = initialState, action) {
	
	switch (action.type) {
		case ADD_POINT:
			return{
				...state,
				points: [
					...state.points,
					action.location
				]	
			}
		case DELETE_POINT:
			return{
				...state,
				points: state.points.slice(0, action.index).concat(state.points.slice(action.index + 1))
				
			}

	
		default:
			return state
	}
}