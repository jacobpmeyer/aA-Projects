import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import * as todoActions from './actions/todo_actions'
import { allTodos } form './reducers/selectors'

const store = configureStore();
window.store = store;
window.todoActions = todoActions;
window.receiveTodo = todoActions.receiveTodo;
window.receiveTodos = todoActions.receiveTodos;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  render(<Root store={store}/>, root);
});