import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Todo from './components/todo'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  render(<Todo />, root);
});