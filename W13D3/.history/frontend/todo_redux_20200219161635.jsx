import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import Todo from './components/todo'

const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  render(<Todo />, root);
});