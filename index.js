import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import './App.css'

let persistedState = loadState()
let store = createStore(todoApp, persistedState)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}, 1000))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
