import React from "react";
import BookList from "../components/books/BookList";
import { Link } from "react-router-dom";

const BookIndex = props => {
  return (
    <div>
      <h1>Book Index Page</h1>
      <h3>
        <Link to="/authors">Authors</Link>
      </h3>
      <BookList />
    </div>
  );
};

export default BookIndex;
