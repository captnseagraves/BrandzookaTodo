import React, { PropTypes } from 'react'
import Delete from '../containers/Delete'

const Todo = ({ onClick, completed, text, id }) => (
  <tr >
    <td><input
      type='checkbox'
      onClick={onClick}
      checked={
        completed ? 'checked' : ''
      }
      >
      </input></td>
  <td
    className="item"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </td>
  <td><Delete id={id}/></td>
</tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo
