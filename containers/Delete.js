import React, { PropTypes } from 'react'
//
// const Delete = ({ onClick }) => (
//   <button className="deleteBtn" onClick={deleteOnClick}>Delete Item</button>
// )
//

//
// export default Delete

import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

let Delete = ({ dispatch, id }) => {

  return (
    <button className="deleteBtn" onClick={ e => {
      dispatch(deleteTodo(id))
      }
    }>Delete Item</button>
  )
}

Delete.propTypes = {
  id: PropTypes.number.isRequired,
}

Delete = connect()(Delete)

export default Delete
