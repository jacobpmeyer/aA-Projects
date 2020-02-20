import { connect } from 'react-redux'
import { receiveTodo, receiveTodos } from '../../actions/todo_actions'
import TodoList from './todo_list'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = { receiveTodo, receiveTodos }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)