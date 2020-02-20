import React from 'react'
import TodosContainer from './todos/todo_list_container'

class App extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (<div>
      <TodosContainer />
    </div>)
  }
}

export default App