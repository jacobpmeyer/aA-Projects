import React from "react";
import GreetingContainer from "./greeting/greeting_container"
import { Route } from 'react-router-dom'
import LoginFormContainer from './login_form/login_form_container'
import SignupFormContainer from './login_form/signup_form_container'

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
    </header>
    
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/" component={GreetingContainer} />
  </div>
);

export default App;