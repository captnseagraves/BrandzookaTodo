import React, { PropTypes } from 'react'
import Delete from '../containers/Delete'

const Todo = ({ onClick, completed, text, id }) => (
  <tr >
    <td><input
      type='checkbox'
      onChange={onClick}
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
    <td><Delete id={id} text={text}/></td>
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Todo
