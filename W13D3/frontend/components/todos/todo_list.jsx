import React from "react";
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

export default function Todos ({ receiveTodo, todos }) {
  let that = this
  return (<div className="todo-list">
    <ul>
      {Object.values(todos).map(todo => { 
        return <TodoListItem key={todo.id} todo={todo} />
      })}
    </ul>
    <TodoForm receiveTodo={receiveTodo}/>
  </div>)
}
