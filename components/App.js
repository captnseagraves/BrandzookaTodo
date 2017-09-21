import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="outerContainer">

      <div className='container'>
        <h1 className='header'>
          <img src={'https://d1cy2e0vbrm1md.cloudfront.net/logos/brandzooka_logo_pink.png'}></img>
          <br></br>
           Todo List
        </h1>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
      </div>
  
  </div>
)

export default App
