/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { point, icon, close, wrapper, listItem } from './ListItem.module.css'

const ListItem = ({ index, location, deleteElem }) => (
  <div className={listItem}>
    <div className={wrapper}>
      <p className={point}>{location}</p>
      <span
        className={close}
        onClick={() => {
          deleteElem(index)
        }}
        role="button"
      >
        <FontAwesomeIcon className={icon} icon={faTimes} />
      </span>
    </div>
  </div>
)

ListItem.propTypes = {
  index: PropTypes.number,
  location: PropTypes.string,
  deleteElem: PropTypes.func,
}

ListItem.defaultProps = {
  index: null,
  location: null,
  deleteElem: () => {},
}

export default ListItem
