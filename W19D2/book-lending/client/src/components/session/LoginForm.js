import { LOGIN_USER } from '../../graphql/mutations'
import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import React from 'react'

export default (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loginUser, { loading, error }] = useMutation(
    LOGIN_USER,
    {
      variables: { username, password },
      update(cache, { data: { login } }) {
        if (!login) setErrorMessage('Invalid Credentials');
        else {
          // console.log("beg", login, "end")
          // we can either write to the cache directly or refetch the IS_LOGGED_IN query so other components will update properly
          // cache.writeData({ data: { isLoggedIn: login.loggedIn, me: { _id: login._id, username: login.username } }});
          localStorage.setItem('token', login.token);
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
      loginUser()
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