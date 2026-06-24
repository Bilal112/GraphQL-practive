import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

function App() {
  const [count, setCount] = useState(0)
  const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      publishedYear
      genre
      author {
        id
        name
      }
    }
  }
`;



  const { loading, error, data } = useQuery(GET_BOOKS);
console.log(data,'-------')
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        {loading && <h1> is Loading .......</h1>}

        {data?.books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author.name}</p>
            <p>Year: {book.publishedYear}</p>
            <p>Genre: {book.genre}</p>
          </div>
        ))}

        <div>
        </div>
      </section>
    </>
  )
}

export default App
