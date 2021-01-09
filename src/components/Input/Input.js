import React, { useRef } from 'react'
import './Input.module.css'
import { connect } from 'react-redux'
import { addPoint } from '../../store/actions/action'

const Input = (props) =>{
	const inputEl = useRef()
	

	function addPoint(e) {
		if(e.code === 'Enter' && inputEl.current.value.trim() !== ''){
			const location = { 'location': inputEl.current.value, 'coordinates': { lat: 10, lng: 10} }
			props.onAddPoint(location)
			inputEl.current.value = null
		}
	}
	
	return(
		<div className='Input'>
			<input 
				ref={inputEl}
				placeholder={props.placeholder}
				onKeyUp={addPoint}
			></input>
		</div>
	)
}

function mapDispatchToProps(dispatch){
	return{
		onAddPoint: location => dispatch(addPoint(location))
	}
}

export default connect(null, mapDispatchToProps)(Input)