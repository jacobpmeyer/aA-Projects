import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => (
      this.setState({ [type]: e.target.value })
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    
  }

  render() {
    return (
      <div>
        <h2>Login!</h2>
        <form className="session-form">
          <label htmlFor="">Username
            <input 
              type="text" 
              value={this.state.username}
              onChange={this.handleInput("username")}
            />
          </label>
          <label htmlFor="">Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>
          <button onSubmit={this.handleSubmit}>Click to log in!</button>
        </form>
      </div>
    )
  }
}

export default Login