import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer } from 'apollo-server';
import Debug from 'debug';
import { typeDefs } from './schema.js';

const debug = Debug('product');

const products = [{
  id: '1',
  title: 'Blender',
  description: null,
  price: 40,
  categoryId: '2',
  DepartmentId: '1'
}]

const categories = [{
  id: '2',
  title: 'Kitchen tools'
}]

const departments = [
  {
    id: '1',
    name: 'Línea blanca'
  },
  {
    id: '2',
    name: 'Comida'
  }
]

const resolvers = {
  Query: {
    product: (_, { id }) => {
      debug(`resolving product by id '${id}'`);
      return products.find(product => product.id === id);
    }
  },
  Product: {
    category(product) {
      debug(`resolving product category for product '${JSON.stringify(product)}'`);
      return categories.find(category => category.id === product.categoryId);
    },
    department(product) {
      debug(`resolving product department for product '${JSON.stringify(product)}'`);
      return departments.find(department => department.id === product.DepartmentId);
    },
  }
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

server.listen({ port: 4001 }).then(() => {
  debug('service started');
});