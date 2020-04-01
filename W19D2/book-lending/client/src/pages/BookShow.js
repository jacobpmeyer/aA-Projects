import React from 'react';
import BookDetails from '../components/books/BookDetails';
import '../styles/book_show.css';

export default (props) => {
  const { bookId } = props.match.params;

  return (
    <div className="book-show-main">
      <BookDetails bookId={bookId} />
    </div>
  )
}