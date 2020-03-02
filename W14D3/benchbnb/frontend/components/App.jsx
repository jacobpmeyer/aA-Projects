import React from "react";
import GreetingContainer from "./greeting/greeting_container"
import { Route } from 'react-router-dom'
import LoginFormContainer from './login_form/login_form_container'
import SignupFormContainer from './login_form/signup_form_container'
import {AuthRoute} from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
    </header>
    
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/" component={GreetingContainer} />
  </div>
);

export default App;