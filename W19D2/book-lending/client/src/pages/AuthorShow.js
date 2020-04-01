import React from 'react';
import AuthorDetails from '../components/authors/AuthorDetails';
import '../styles/author_show.css'

export default (props) => {
  const { authorId } = props.match.params

  return (
    <div className="author-show-main">
      <AuthorDetails authorId={authorId} />
    </div>
  )
}