import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries'


const UserDetails = () => {
  const { data, loading, error } = useQuery(
    CURRENT_USER,
  )

  if (loading) return <h1> Loading...</h1>
  if (error) return <h1> Error </h1>
  if (!data) return <h1> No user found </h1>
  
  const user = data.me

  return (
    <div>
      <h2>{user.username}</h2>
      <ul>
        {user.books && user.books.map(book => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserDetails