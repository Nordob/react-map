import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onDeletePoint } from '../../redux/list/action';

import Item from './item';

import { element } from './list.module.css';

const List = () => {
  const dispatch = useDispatch();
  const { points } = useSelector(({ list }) => list);

  const onRemovePoint = (id) => {
    dispatch(onDeletePoint(id));
  };

  return (
    <ul className={element}>
      {points?.map(({ id, location }) => (
        <Item key={id} name={location} id={id} onClick={onRemovePoint} />
      ))}
    </ul>
  );
};

export default List;
