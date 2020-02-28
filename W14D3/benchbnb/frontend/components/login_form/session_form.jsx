import { Link } from "react-router-dom";
import React from 'react'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleUpdate(field) {
    return (e) => this.setState({ [field]: e.target.value })
  }

  render() {

    let buttonName = ""
    let otherType = ""
    let linkName = ""
    if (this.props.formType === "login") {
      buttonName = "Log In!"
      otherType = "signup"
      linkName = "Sign Up!"
    } else {
      buttonName = "Sign Up!"
      otherType = "login"
      linkName = "Log In!"
    }

    return (
      <div className="session-form">
        {/* <ul>
          {this.props.errors.map(error => <li>{error}</li>)}
        </ul> */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleUpdate("username")}/>
          </label>
          <label htmlFor="">Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleUpdate("password")} />
          </label>
          <button type={this.props.formType}>{buttonName}</button>
        </form>
        {/* <Link to={otherType} >{linkName}</Link> */}
      </div>
    )
  }

}

export default SessionForm