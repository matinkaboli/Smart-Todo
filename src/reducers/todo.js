import changeActive from '../helper/changeActive'
const todoReducer = (
  state = JSON.parse(localStorage.getItem('todo')) || [],
  action
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'EDIT_TODO':
      const newTodo = state.filter((z) => action.payload.id !== z.id)
      return [action.payload, ...newTodo]
    case 'DELETE_TODO':
      return state.filter((x) => action.payload !== x.id)
    case 'ACTIVATE_TODO':
      return [...changeActive(action.payload, [...state])]
    default:
      return state
  }
}

export default todoReducer
