


export const allTodos = (state) => {
  return Object.keys(state.todos).map((key, idx) => state.todos[key] )
}