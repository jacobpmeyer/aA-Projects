import React from "react";
import BookDetails from "../components/books/BookDetails";

const BookShow = props => {
  const { bookId } = props.match.params;

  return (
    <>
      <h1>Book Show Pag</h1>
      <BookDetails bookId={bookId} />
    </>
  );
};

export default BookShow;
