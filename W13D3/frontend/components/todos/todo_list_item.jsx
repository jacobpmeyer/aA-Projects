import React from 'react'

export default function TodoListItem ({ todo: { id, title, body, done }}) {
  return <li>{title}</li>
}