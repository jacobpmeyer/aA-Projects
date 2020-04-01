import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK } from '../../graphql/queries';
import {Link} from 'react-router-dom';


export default ({ bookId }) => {
  const { data, loading, error } = useQuery(
    GET_BOOK,
    {
      variables: {
        bookId
      }
    })

  if (loading) return <h1> Loading...</h1>
  if (error) return <h1> Error </h1>
  if (!data) return <h1> This book does not exist! </h1>

  const book = data.book
    return (
      <div>
        <h2>{book.title}</h2>
        <p>By: <Link to={`/authors/${book.author._id}`}>{book.author.name}</Link></p>
        {book.isBooked ? (
          <p><i className="fas fa-check"></i>Already Checked Out</p>
        ) : (
            <p><i className="fas fa-check"></i>Available for Check Out</p>
          )}
      </div>
    )
}