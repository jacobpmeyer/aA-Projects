import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions'

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODO:
      return Object.assign({}, state, {[action.todo.id]: action.todo})
    case RECEIVE_TODOS:
      const newTodos = action.todos.map((todo) => { return {[todo.id]: todo} })
      return Object.assign({}, ...newTodos) 
    default:
      return state;
  }
}

export default todosReducer;