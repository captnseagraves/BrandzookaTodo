import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className='container'>
    <h1 className='header'>Brandzooka Todo List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
<div className="fb-share-button" data-href="https://brandzooka.com/register" data-layout="button" data-size="large" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbrandzooka.com%2Fregister&amp;src=sdkpreparse">Share</a></div>
  </div>
)

export default App
