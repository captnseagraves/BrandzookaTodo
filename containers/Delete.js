import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

let Delete = ({ dispatch, id, text }) => {

  return (
    <button className="deleteBtn" onClick={ e => {
      dispatch(deleteTodo(id))
      }
    }>X</button>
  )
}

Delete.propTypes = {
  id: PropTypes.string.isRequired,
}

Delete = connect()(Delete)

export default Delete
