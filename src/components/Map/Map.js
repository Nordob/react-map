import React from 'react' 
import { GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
	width: '400px',
	height: '400px'
  };
  
  const center = {
	lat: -3.745,
	lng: -38.523
  };

  const position = {
	lat: -3.745,
	lng: -38.523
  }

function Map(props) {
	return(
		<div className='Map'>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
			>
				<Marker position={position}></Marker>
				{ /* Child components, such as markers, info windows, etc. */ }
				<></>
			</GoogleMap>
		</div>
	)
}

export default Map