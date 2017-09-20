const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':

      let newStore = [
        ...state,
        todo(undefined, action)
      ]
      localStorage.setItem('todos', JSON.stringify(newStore))
      return newStore
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_TODO':
      let deleteStore = Object.assign([], state.filter(t => {
        if (t.id !== action.id) {
          return true
          }
          else {
            return false
          }
        })
      )
      localStorage.setItem('todos', JSON.stringify(deleteStore))
        return deleteStore
    case 'GET_TODOS':
        if (localStorage.getItem('todos') === null) {
          localStorage.setItem('todos', JSON.stringify([]))
        }
      let savedData = JSON.parse(localStorage.getItem('todos'))
      console.log(savedData);
      return savedData
    default:
      return state
  }
}



// let serial = localStorage.getItem('todos').length + 1
//
// id = serial++

export default todos
