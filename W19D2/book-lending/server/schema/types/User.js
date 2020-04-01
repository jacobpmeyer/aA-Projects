const mongoose = require("mongoose");
const User = mongoose.model("User");
const Book = mongoose.model("Book");
const Author = mongoose.model("Author");

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    books: [Book]
  }
  extend type Mutation {
    login(username: String!, password: String!): UserCredentials
    signUp(username: String!, password: String!): UserCredentials
  }
  extend type Query {
    me: User
  }
  type UserCredentials {
    _id: ID!
    username: String!
    token: String
    loggedIn: Boolean
  }
`;

const resolvers = {
  Query: {
    me(_, __, context) {
      // context.user is the logged-in user
      return context.user;
    }
  },
  Mutation: {
    login(_, { username, password }) {
      return User.login(username, password);
    },
    signUp(_, { username, password }) {
      return User.signUp(username, password);
    }
  },
  User: {
    books: async (parentValue, _, context) => {
      const queriedUser = parentValue;
      const loggedInUser = context.user;
      // only return the borrowed books of a user if the queried user is the logged in user
      if (loggedInUser && queriedUser._id === loggedInUser._id) {
        await loggedInUser.populate("books").execPopulate();
        return loggedInUser.books;
      }
      return null;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
