let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id, text) => {
  return {
    type: 'TOGGLE_TODO',
    id,
    text
  }
}

export const deleteTodo = (id, text) => {
  return {
    type: 'DELETE_TODO',
    id,
    text
  }
}

export const getTodos = () => {
  return {
    type: 'GET_TODOS'
  }
}
