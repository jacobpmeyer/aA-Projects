const mongoose = require('mongoose');

const User = mongoose.model('User');
const Category = mongoose.model('Category');
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');

const typeDefs = `
type Category {
  _id: ID!
  name: String!
  products: [Product]
}
extend type Query {
  categories: [Category]
  category(_id: ID!): Category
}
`

const resolvers = {
  Category: {
    products(parentValue, _) {
      return Product.find({ category: parentValue._id });
    }
  },
  Mutation: {
    createCategory(_, { name }) {
      const category = new Category({ name })
      return category.save();
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}