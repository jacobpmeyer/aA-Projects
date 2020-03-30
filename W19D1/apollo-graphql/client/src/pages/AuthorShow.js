import React from "react";
import AuthorDetails from "../components/authors/AuthorDetails";

const AuthorShow = props => {
  const { authorId } = props.match.params;
  return (
    <div>
      <h1>Author show page</h1>
      <AuthorDetails authorId={authorId} />
    </div>
  );
};

export default AuthorShow;
