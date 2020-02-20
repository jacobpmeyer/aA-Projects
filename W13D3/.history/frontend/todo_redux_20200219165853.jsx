import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import Todos from './components/todos'
import * as todoActions from './actions/todo_actions'

const store = configureStore();
window.store = store;
window.todoActions = todoActions;
window.receiveTodo = todoActions.receiveTodo;
window.receiveTodos = todoActions.receiveTodos;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  render(<Todos />, root);
});