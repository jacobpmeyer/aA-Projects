import gql from "graphql-tag";

const AUTHOR_DATA = gql`
  fragment authorData on Author {
    _id
    name
  }
`;
export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      ...authorData
    }
  }
  ${AUTHOR_DATA}
`;
export const GET_AUTHOR = gql`
  query GetAuthor($authorId: ID!) {
    author(_id: $authorId) {
      ...authorData
      books {
        _id
        title
      }
    }
  }
  ${AUTHOR_DATA}
`;
