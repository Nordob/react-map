import React, { useRef } from 'react'
import './Input.module.css'
import { connect } from 'react-redux'
import { addPoint } from '../../store/actions/action'
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api'

const Input = (props) =>{
	const inputEl = useRef()
	const inputPoint = useRef()
	const googleMapsApiKey = "AIzaSyBfcEFFuRT3cmPuOQWeexiF6aaDpolRKkY";
	function handleLoad() {
		
	}

  	function hanldePlacesChanged() {
		// const Places = inputPoint.current.state.searchBox.getPlaces()
		// console.log('Адрес: ', Places[0].formatted_address)
		// console.log('lat: ', Places[0].geometry.location.lat())
		// console.log('lng: ', Places[0].geometry.location.lng())
		inputEl.current.focus()
	}


	function addPoint(e) {
		
		if(e.code === 'Enter' && inputEl.current.value.trim() !== ''){
			const Places = inputPoint.current.state.searchBox.getPlaces()
			const location = { 
				'location': Places[0].formatted_address, 
				'coordinates': { lat: Places[0].geometry.location.lat(), lng: Places[0].geometry.location.lng()} }
			props.onAddPoint(location)
			inputEl.current.value = null
		}
		inputEl.current.focus()
	}
	
	return(
		<div className='Input'>
			{/* <LoadScript id="script-loader" googleMapsApiKey={googleMapsApiKey} libraries={["places"]}> */}
				<StandaloneSearchBox
					ref={inputPoint}
					onLoad={handleLoad}
					onPlacesChanged={hanldePlacesChanged}
				>
					<input 
						ref={inputEl}
						placeholder={props.placeholder}
						onKeyUp={addPoint}
					></input>
				</StandaloneSearchBox>
			{/* </LoadScript> */}
		</div>
	)
}

function mapDispatchToProps(dispatch){
	return{
		onAddPoint: location => dispatch(addPoint(location))
	}
}

export default connect(null, mapDispatchToProps)(Input)