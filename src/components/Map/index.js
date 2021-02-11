import React, { useEffect, useState } from 'react'
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { map } from './Map.module.css'

const containerStyle = {
  width: '400px',
  height: '400px',
}

function Map({ point }) {
  const [mapCenter, setmapCenter] = useState({
    lat: 48.0201627,
    lng: 38.65452579999999,
  })
  const [responseDirection, setresponseDirection] = useState()
  const [origin, setOrigin] = useState()
  const [waypoints, setWaypoints] = useState()
  const [destination, setDestination] = useState()

  useEffect(() => {
    if (point.length > 1) {
      setOrigin(point[0].coordinates)
      setWaypoints(
        [
          ...point.filter(
            (item, index) => index !== 0 && index !== point.length - 1
          ),
        ].map((item) => ({ location: item.coordinates }))
      )
      setDestination(point[point.length - 1].coordinates)
    }

    if (point.length < 2) {
      setresponseDirection(null)
    }

    if (point.length === 1) {
      setmapCenter(point[point.length - 1].coordinates) // установка центра карты
    }
  }, [point])

  function directionsCallback(response) {
    if (response !== null) {
      if (response.status === 'OK') {
        setresponseDirection(response)
      }
    }
  }

  const directionsServ = (
    <DirectionsService
      options={{
        destination,
        origin,
        travelMode: 'WALKING',
        waypoints,
      }}
      callback={directionsCallback}
    />
  )

  const directionsRend = (
    <DirectionsRenderer
      options={{
        directions: responseDirection,
      }}
    />
  )

  return (
    <div className={map}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
      >
        {point.length === 1 && <Marker position={point[0].coordinates} />}
        {origin !== undefined && destination !== undefined && directionsServ}
        {responseDirection !== null && point.length > 1 && directionsRend}
      </GoogleMap>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    point: state.points,
  }
}

Map.propTypes = {
  point: PropTypes.arrayOf(PropTypes.object),
}

Map.defaultProps = {
  point: [],
}

export default connect(mapStateToProps)(Map)
