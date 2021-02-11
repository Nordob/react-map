import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { StandaloneSearchBox } from '@react-google-maps/api'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { input, search, icon } from './Input.module.css'
import { addPoint } from '../../store/actions/action'

const Input = ({ onAddPoint, placeholder }) => {
  const inputEl = useRef()
  const inputPoint = useRef()
  function handleLoad() {}

  function hanldePlacesChanged() {
    const Places = inputPoint.current.state.searchBox.getPlaces()
    const location = {
      location: Places[0].formatted_address,
      coordinates: {
        lat: Places[0].geometry.location.lat(),
        lng: Places[0].geometry.location.lng(),
      },
      id: Places[0].formatted_address.slice(
        0,
        Places[0].formatted_address.indexOf(',')
      ),
    }
    onAddPoint(location)
    inputEl.current.value = null

    inputEl.current.focus()
  }

  return (
    <div className={input}>
      <FontAwesomeIcon icon={faCompass} className={icon} />
      <StandaloneSearchBox
        ref={inputPoint}
        onLoad={handleLoad}
        onPlacesChanged={hanldePlacesChanged}
      >
        <input
          ref={inputEl}
          placeholder={placeholder}
          onKeyUp={addPoint}
          className={search}
        />
      </StandaloneSearchBox>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onAddPoint: (location) => dispatch(addPoint(location)),
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onAddPoint: PropTypes.func,
}

Input.defaultProps = {
  placeholder: '',
  onAddPoint: () => {},
}

export default connect(null, mapDispatchToProps)(Input)
