import React from 'react';
import PropTypes from 'prop-types';
import { element, close } from './item.module.css';

const Item = ({ id, name, onClick }) => {
  const onRemoveItem = () => onClick(id);
  return (
    <li className={element}>
      <p>{name}</p>
      <button className={close} type="button" onClick={onRemoveItem}>
        x
      </button>
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Item.defaultProps = {
  name: '',
};

export default Item;
