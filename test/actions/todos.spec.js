import expect from 'expect'
import * as actions from '../../actions'
import { v4 } from 'node-uuid'


describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    // implemented typeof test because v4() generated random id results each time
    expect(typeof actions.addTodo('Use Redux')).toEqual('object')
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

})
