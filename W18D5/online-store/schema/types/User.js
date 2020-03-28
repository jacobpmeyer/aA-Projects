const mongoose = require('mongoose');

const User = mongoose.model('User');
const Category = mongoose.model('Category');
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');

const typeDefs = `
type User {
  _id: ID!
  email: String!
  orders: [Order]
}
type UserCredentials {
  token: String
  _id: ID!
  email: String!
  orders: [Order]
}
extend type Mutation {
  signup(email: String, password: String): UserCredentials
}
`;

const resolvers = {
  User: {
    orders(parentValue, _) {
      return Order.find({ user: parentValue._id });
    }
  },
  Mutation: {
    signup(_, { email, password }) {
      const newUser = User.signUp(email, password)
      // Not sure if this is the correct thing to return or not (checkthisout)
      return newUser
    },
  }
}

module.exports = {
  typeDefs,
  resolvers
}