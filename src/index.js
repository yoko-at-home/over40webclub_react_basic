import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { books } from './components/data/books'
import Book from './components/pages/Book'

function BookList() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', paddingTop: 30 }}>
        Over 40 Web Club Booklist
      </h1>
      <section className='booklist'>
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </section>
    </div>
  )
}



ReactDom.render(<BookList />, document.getElementById('root'))
