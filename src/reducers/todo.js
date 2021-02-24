const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'EDIT_TODO':
      const newTodo = state.filter((z) => action.payload.id !== z.id)
      return [action.payload, ...newTodo]
    case 'DELETE_TODO':
      return state.filter((x) => action.payload !== x.id)
    default:
      return state
  }
}

export default todoReducer
