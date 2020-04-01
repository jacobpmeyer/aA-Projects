import React from 'react';
import AuthorList from '../components/authors/AuthorList';
import '../styles/author_index.css'

export default () => {
  return (
    <div className="author-index-main">
      <h1>Authors</h1>
      <AuthorList />
    </div>
  );
};