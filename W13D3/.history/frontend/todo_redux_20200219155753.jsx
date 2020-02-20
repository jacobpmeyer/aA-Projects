import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Todos from './components/todos'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  render(<Todos />, root);
});