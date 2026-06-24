// src/resolvers.js
import { books, authors } from "./data.js";

let nextBookId = String(books.length + 1);

export const resolvers = {
  Query: {
    books: (_parent, { genre }) => {
      if (genre) {
        return books.filter((b) => b.genre.toLowerCase() === genre.toLowerCase());
      }
      return books;
    },
    book: (_parent, { id }) => books.find((b) => b.id === id),
    authors: () => authors,
    author: (_parent, { id }) => authors.find((a) => a.id === id),
  },

  Mutation: {
    addBook: (_parent, { title, authorId, publishedYear, genre }) => {
      const author = authors.find((a) => a.id === authorId);
      if (!author) {
        throw new Error(`Author with id ${authorId} not found`);
      }
      const newBook = {
        id: nextBookId++,
        title,
        authorId,
        publishedYear: publishedYear ?? null,
        genre: genre ?? null,
      };
      books.push(newBook);
      return newBook;
    },

    deleteBook: (_parent, { id }) => {
      const index = books.findIndex((b) => b.id === id);
      if (index === -1) return false;
      books.splice(index, 1);
      return true;
    },
  },

  // Field-level resolvers to handle relationships
  Book: {
    author: (book) => authors.find((a) => a.id === book.authorId),
  },

  Author: {
    books: (author) => books.filter((b) => b.authorId === author.id),
  },
};
