const mongoose = require('mongoose');
const { merge } = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

const types = require('./types');

const User = mongoose.model('User');
const Category = mongoose.model('Category');
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');

const otherTypeDefs = `
type Query {
  _: Boolean
}
type Mutation {
  _: Boolean
}
`;

const otherResolvers = {
  Query: {
    categories(_, __, context) {
      console.log(context.user)
      return Category.find({})
    },
    category(_, { _id }) {
      return Category.findById(_id);
    },
    products(_, __) {
      return Product.find({});
    },
    product(_, { _id }) {
      return Product.findById(_id);
    },
    orders(_, __) {
      return Order.find({});
    },
    order(_, { _id }) {
      return Order.findById(_id);
    }
  },
};

const typeDefs = [...types.map(type => type.typeDefs), otherTypeDefs];

const resolvers = merge(...types.map(type => type.resolvers), otherResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = {
  schema,
  typeDefs,
  resolvers
}