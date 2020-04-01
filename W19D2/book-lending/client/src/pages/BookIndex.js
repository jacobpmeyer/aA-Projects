import React from 'react';
import BookList from '../components/books/BookList';
import '../styles/book_index.css'

export default () => {
  return (
    <div className="book-index-main">
      <h1>Books in Our System</h1>
      <BookList />
    </div>
  );
};