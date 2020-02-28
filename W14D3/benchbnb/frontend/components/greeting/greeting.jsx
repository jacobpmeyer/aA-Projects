import React from 'react';
import {Link} from 'react-router-dom'

class Greeting extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
    this.handlelogout = this.handlelogout.bind(this)
  }

  handlelogout() {
    this.props.logout()
  }

  render(){
    if (this.props.currentUser) {
      return (
        <>
          <h2>Hello, {this.props.currentUser.username}</h2>
          <button onClick={this.handlelogout}>Log out!</button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup">Sign Up!</Link>
          <br />
          <Link to="/login">Log In!</Link>
        </>
      )
    }
      
  }

};

export default Greeting;