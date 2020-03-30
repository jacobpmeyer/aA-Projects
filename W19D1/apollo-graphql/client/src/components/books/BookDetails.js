import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { GET_BOOK } from "../../graphql/queries/book";

const BookDetails = props => {
  const { data, loading, error } = useQuery(GET_BOOK, {
    variables: {
      bookId: props.bookId
    }
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  if (!data.book) return <p>Book Not Found</p>;

  const { book } = data;

  return (
    <div>
      <h1>{book.title}</h1>
      <span>{book.author.name}</span>
      <span>
        {book.isBooked ? <p>Already Checked Out</p> : <p>Not Checked Out</p>}
      </span>
    </div>
  );
};

export default BookDetails;
