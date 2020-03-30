import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { GET_AUTHOR } from "../../graphql/queries/author";

const AuthorDetails = props => {
  const { data, loading, error } = useQuery(GET_AUTHOR, {
    variables: {
      authorId: props.authorId
    }
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>Not Found</p>;

  const { author } = data;
  return (
    <>
      <h1>{author.name}</h1>
      <h3>Books</h3>
      <ul>
        {author.books &&
          author.books.map(book => (
            <li key={book._id}>
              <Link to={`/book/${book._id}`}>{book.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default AuthorDetails;
