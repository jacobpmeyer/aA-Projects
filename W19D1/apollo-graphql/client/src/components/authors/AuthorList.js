import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { GET_AUTHORS } from "../../graphql/queries/author";

const AuthorList = props => {
  const { data, loading, error } = useQuery(GET_AUTHORS);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>Not Found</p>;

  const { authors } = data;
  return (
    <ul>
      {authors &&
        authors.map(author => (
          <li key={author._id}>
            <Link to={`/authors/${author._id}`}>{author.name}</Link>
          </li>
        ))}
    </ul>
  );
};
export default AuthorList;
