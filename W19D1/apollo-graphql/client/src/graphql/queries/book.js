import gql from "graphql-tag";

const BOOK_DATA = gql`
  fragment bookData on Book {
    _id
    title
    isBooked
    author {
      _id
      name
    }
  }
`;

export const GET_BOOK = gql`
  query GetBook($bookId: ID!) {
    book(_id: $bookId) {
      ...bookData
    }
  }
  ${BOOK_DATA}
`;

export const GET_BOOKS = gql`
  query GET_BOOKS {
    books {
      ...bookData
    }
  }
  ${BOOK_DATA}
`;
