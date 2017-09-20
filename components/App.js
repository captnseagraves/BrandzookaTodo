import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import OnLoad from '../containers/OnLoad'


const App = () => (
  <div className='container'>
    <h1 className='header'>Brandzooka Todo List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <OnLoad />
  </div>
)

export default App
