import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger
  }

  render() {
    return (<div className="todo-form">
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Body:
          <input type="text" name="body" />
        </label>
        <div>
          Done:
          <input type="radio" name="title" id="true" value="true" />
          <label htmlFor="true">Yes</label>
          <input type="radio" name="title" id="false" value="false" checked/>
          <label htmlFor="False">No</label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}

export default TodoForm;