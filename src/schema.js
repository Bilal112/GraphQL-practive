// src/schema.js
// GraphQL schema definition (SDL - Schema Definition Language)

export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: Author!
    publishedYear: Int
    genre: String
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Query {
    "Fetch all books, optionally filtered by genre"
    books(genre: String): [Book!]!

    "Fetch a single book by its ID"
    book(id: ID!): Book

    "Fetch all authors"
    authors: [Author!]!

    "Fetch a single author by ID"
    author(id: ID!): Author
  }

  type Mutation {
    "Add a new book to the library"
    addBook(title: String!, authorId: ID!, publishedYear: Int, genre: String): Book!

    "Delete a book by ID"
    deleteBook(id: ID!): Boolean!
  }
`;
