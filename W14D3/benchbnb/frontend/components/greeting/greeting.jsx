import React from 'react';
import Link from 'react-router-dom'

class Greeting extends React.Component{

    render(){
      if (this.props.currentUser) {
        return (
          <h2>Hello, {this.props.currentUser.username}</h2>
        );
      } else {
        return ( <h2>Welcome to BenchBnB</h2> )
      }
        
    }

};

export default Greeting;