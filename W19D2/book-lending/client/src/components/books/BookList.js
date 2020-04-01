import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {Link} from 'react-router-dom';
import { GET_BOOKS } from '../../graphql/queries';



export default function BookList() {
  const {  data, loading, error } = useQuery(GET_BOOKS, {fetchPolicy: "cache-and-network" });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>Not found</p>;
  return (
    <ul className="book-list-main">
      {data.books && data.books.map(book => (
        <li key={book._id}>
          <i className="fas fa-bookmark"></i>&nbsp;&nbsp;<Link to={`/books/${book._id}`}>{book.title}</Link> by: <Link to={`/authors/${book.author._id}`}>{book.author.name}</Link>
        </li>
      ))}
    </ul>
  )
}