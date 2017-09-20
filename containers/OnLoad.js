import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../actions'

let OnLoad = ({ dispatch }) => {

  dispatch(getTodos())

  return (
    <div></div>
  )
}

OnLoad = connect()(OnLoad)

export default OnLoad
