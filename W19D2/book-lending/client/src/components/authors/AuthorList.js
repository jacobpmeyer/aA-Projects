import React from 'react';
import { useQuery} from '@apollo/react-hooks';
import {Link} from 'react-router-dom';
import {GET_AUTHORS} from '../../graphql/queries';

export default function AuthorList() {
  const { data, loading, error } = useQuery(GET_AUTHORS, { fetchPolicy: "cache-and-network" });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>Not found</p>;
  return (
    <ul className="author-list-main">
      {data.authors && data.authors.map(author => (
        <li key={author._id}>
          <i className="fas fa-pen-fancy"></i>&nbsp;&nbsp;<Link to={`/authors/${author._id}`}>{author.name}</Link>
        </li>
      ))}
    </ul>
  )
}