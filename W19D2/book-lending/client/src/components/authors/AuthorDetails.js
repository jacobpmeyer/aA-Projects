import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHOR } from '../../graphql/queries';
import {Link} from 'react-router-dom';

export default ({ authorId }) => {
  const {data, loading, error} = useQuery(
    GET_AUTHOR,
    {
      variables: {
        authorId
      }
    });

  if (loading) return <h1> Loading...</h1>
  if (error) return <h1> Error </h1>
  if (!data) return <h1> This author does not exist </h1>
  
    const list = data.author.books.length >= 1 ? 
       (
        <ul className="author-book-list">
          {data.author.books.map(book => {
            return <li key={book._id}><Link to={`/books/${book._id}`}>{book.title}</Link></li>
        })} 
        </ul> 
    ) : <h3> This author has no books. </h3>


  
  if (data.author) {
    return (
      <div className="author-and-books">
        <h1>{data.author.name}'s Books</h1>
        {list}
      </div>
    )
  }
}