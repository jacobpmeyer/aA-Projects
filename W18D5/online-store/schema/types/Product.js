const mongoose = require('mongoose');

const User = mongoose.model('User');
const Category = mongoose.model('Category');
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');

const typeDefs = `
type Product {
  _id: ID!
  name: String!
  description: String
  category: Category
}
extend type Query {
  products: [Product]
  product(_id: ID!): Product
}
extend type Mutation {
  createProduct(name: String! description: String, price: Float, categoryId: ID!): Product
  createCategory(name: String!): Category
}
`

const resolvers = {
  Mutation: {
    createProduct: async (_, { name, description, price, categoryId }) => {
      const category = await Category.findById(categoryId);
      if (!category) throw new Error(`Category with ID ${categoryId} not found`);
      const product = new Product({ name, description, price, categoryId });
      return product.save();
    }
  },
  Product: {
    category: async (parentValue, _) => {
      const product = await parentValue.populate('category').execPopulate();
      return product.category;
    }
  },
}

module.exports = {
  typeDefs,
  resolvers
}