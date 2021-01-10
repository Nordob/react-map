import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addPoint } from '../../redux/list/action';

import { input } from './input.module.css';

const Input = ({ placeholder }) => {
  const dispatch = useDispatch();
  const inputEl = useRef();

  const onAddPoint = ({ code }) => {
    if (code === 'Enter' && inputEl.current?.value.trim() !== '') {
      const location = { location: inputEl.current.value, coordinates: { lat: 10, lng: 10 } };
      dispatch(addPoint(location));
      inputEl.current.value = null;
    }
  };

  return (
    <div className={input}>
      <input ref={inputEl} placeholder={placeholder} onKeyUp={onAddPoint} />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
