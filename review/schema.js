import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.3", 
    import: ["@key", "@shareable"])
  type Review {
    id: ID!
    rating: Float!
    content: String!
  }
  type Product @key(fields: "id") {
    id: ID!
    reviews: [Review!]!
  }
`;