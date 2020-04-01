const mongoose = require("mongoose");
const User = mongoose.model("User");
const Book = mongoose.model("Book");
const Author = mongoose.model("Author");

const typeDefs = `
  type Author {
    _id: ID!
    name: String
    books: [Book]
  }
  extend type Query {
    authors: [Author]
    author(_id: ID!): Author
  }
`;

const resolvers = {
  Query: {
    authors(_, __) {
      return Author.find({});
    },
    author(__, { _id }) {
      return Author.findById(_id);
    }
  },
  Mutation: {
    borrowBooks(_, { bookIds }, context) {
      const loggedInUser = context.user;
      if (!loggedInUser)
        return {
          success: false,
          message: "Need to log in to borrow books",
          books: []
        };
      return Book.borrowBooks(bookIds, loggedInUser);
    },
    returnBook: async (_, { bookId }, context) => {
      const loggedInUser = context.user;
      if (!loggedInUser)
        return {
          success: false,
          message: "Need to log in to return books",
          books: []
        };
      const book = await Book.findById(bookId);
      return book.returnBook(loggedInUser);
    },
    login(_, { username, password }) {
      return User.login(username, password);
    },
    signUp(_, { username, password }) {
      return User.signUp(username, password);
    }
  },
  Author: {
    books(parentValue, _) {
      const author = parentValue;
      // find all the books who have the queried author as their author
      return Book.find({ author: author._id });
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
