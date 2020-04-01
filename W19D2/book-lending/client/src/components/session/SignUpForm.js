import { SIGNUP_USER } from '../../graphql/mutations'
import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries'
import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

export default (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [signUpUser, { loading, error }] = useMutation(
    SIGNUP_USER,
    {
      variables: { username, password },
      update(cache, { data: { signUp } }) {
        if (!signUp) setErrorMessage('Invalid Credentials');
        else {
          localStorage.setItem('token', signUp.token);
        }
      },
      onError() {
        setErrorMessage('Something went wrong');
      },
      refetchQueries: [{ query: IS_LOGGED_IN }, { query: CURRENT_USER }]
    }
  )
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      signUpUser()
    }}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <input type="submit" value="Submit" disabled={loading} />
    </form>
  )
}