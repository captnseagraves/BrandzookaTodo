import expect from 'expect'
import * as actions from '../../actions'
import localStorage from 'mock-local-storage'

global.window = {}
window.localStorage = global.localStorage


describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1, 'Crush Code')).toEqual({
      type: 'TOGGLE_TODO',
      id: 1,
      text: 'Crush Code'
    })
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(1, 'Run the tests')).toEqual({
      type: 'DELETE_TODO',
      id: 1,
      text: 'Run the tests'
    })
  })

  it('getTodos should create GET_TODOS action', () => {
    expect(actions.getTodos()).toEqual({
      type: 'GET_TODOS'
    })
  })

})
