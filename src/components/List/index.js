/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import ListItem from './item'
import { onDeletePoint, onUpdateList } from '../../store/actions/action'
import { list } from './List.module.css'

const List = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [characters, updateCharacters] = useState()

  function deleteElem(index) {
    props.onDeletePoint(index)
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return
    const items = Array.from(props.list)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    updateCharacters(items)
    props.onUpdateList(items)
  }

  return (
    <div className={list}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {props.list.length === 0
                ? null
                : props.list.map(({ location, id }, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ListItem
                            location={location}
                            index={index}
                            deleteElem={deleteElem}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    list: state.points,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDeletePoint: (index) => dispatch(onDeletePoint(index)),
    onUpdateList: (updateList) => dispatch(onUpdateList(updateList)),
  }
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onDeletePoint: PropTypes.func,
  onUpdateList: PropTypes.func,
}

List.defaultProps = {
  list: [],
  onDeletePoint: () => {},
  onUpdateList: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
