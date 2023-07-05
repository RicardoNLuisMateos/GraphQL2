import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.3", import: ["@key", "@shareable"])
  
  type Product @key(fields: "id") {
    id: ID!
    title: String!
    description: String
    price: Int!
    category: Category!
    department: Department!
  }

  type Category {
    id: ID!
    title: String!
  }

  type Department {
    id: ID!
    name: String!
  }

  type Query {
    product(id: ID!): Product
  }
`;