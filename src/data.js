// src/data.js
// In-memory "database" for demo purposes

export const authors = [
  { id: "1", name: "George Orwell" },
  { id: "2", name: "Jane Austen" },
  { id: "3", name: "Isaac Asimov" },
  {id:'4', name :'Bilal'}
];

export const books = [
  { id: "1", title: "1984", authorId: "1", publishedYear: 1949, genre: "Dystopian" },
  { id: "2", title: "Animal Farm", authorId: "1", publishedYear: 1945, genre: "Satire" },
  { id: "3", title: "Pride and Prejudice", authorId: "2", publishedYear: 1813, genre: "Romance" },
  { id: "4", title: "Foundation", authorId: "4", publishedYear: 1951, genre: "Science Fiction" },
  { id: "5", title: "I, Robot", authorId: "3", publishedYear: 1950, genre: "Science Fiction" },
];
