# GraphQL Sample Project

A minimal Node.js GraphQL API built with [Apollo Server](https://www.apollographql.com/docs/apollo-server/), modeling a small library of books and authors.

## Features

- Full GraphQL schema with `Query` and `Mutation` types
- Relationships between `Book` and `Author` types
- In-memory data store (no database needed)
- Apollo Sandbox UI for interactive testing (available at the server URL)

## Project structure

```
graphql-sample-project/
├── package.json
├── README.md
└── src/
    ├── index.js       # Server entry point
    ├── schema.js      # GraphQL type definitions (SDL)
    ├── resolvers.js   # Resolver functions
    └── data.js        # In-memory sample data
```

## Getting started

### 1. Install dependencies

```bash
cd graphql-sample-project
npm install
```

### 2. Start the server

```bash
npm start
```

You should see:

```
🚀 GraphQL server ready at http://localhost:4000/
```

Open that URL in your browser to use **Apollo Sandbox**, an interactive GraphQL IDE, or send requests with `curl`/Postman.

### 3. (Optional) Dev mode with auto-reload

```bash
npm run dev
```

## Example queries

### Get all books

```graphql
query {
  books {
    id
    title
    publishedYear
    genre
    author {
      name
    }
  }
}
```

### Filter books by genre

```graphql
query {
  books(genre: "Science Fiction") {
    title
    author {
      name
    }
  }
}
```

### Get a single author and their books

```graphql
query {
  author(id: "1") {
    name
    books {
      title
      publishedYear
    }
  }
}
```

### Add a new book (mutation)

```graphql
mutation {
  addBook(title: "Brave New World", authorId: "2", publishedYear: 1932, genre: "Dystopian") {
    id
    title
    author {
      name
    }
  }
}
```

### Delete a book (mutation)

```graphql
mutation {
  deleteBook(id: "5")
}
```

## Testing via curl

```bash
curl -X POST http://localhost:4000/ \
  -H "Content-Type: application/json" \
  -d '{"query": "{ books { title author { name } } }"}'
```

## Next steps

This is a starting point. To extend it toward a production setup, consider:
- Replacing the in-memory `data.js` with a real database (e.g. PostgreSQL via Prisma, or MongoDB)
- Adding input validation and error handling
- Adding authentication/authorization (e.g. via context in Apollo Server)
- Splitting schema/resolvers further as the project grows (modular schema with `graphql-tools`)
- Adding tests with `Jest` or `Vitest`
