import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

let Delete = ({ dispatch, id, text }) => {

  return (
    <button className="deleteBtn" onClick={ e => {
      dispatch(deleteTodo(id, text))
      }
    }>X</button>
  )
}

Delete.propTypes = {
  id: PropTypes.number.isRequired,
}

Delete = connect()(Delete)

export default Delete
