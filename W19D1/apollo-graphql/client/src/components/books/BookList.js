import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { GET_BOOKS } from "../../graphql/queries/book";

const BookList = props => {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>Not found</p>;

  return (
    <ul>
      {data.books &&
        data.books.map(book => (
          <li key={book._id}>
            <Link to={`/book/${book._id}`}>
              {book.title} by: {book.author.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default BookList;
