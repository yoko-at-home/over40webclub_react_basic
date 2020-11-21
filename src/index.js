import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { books } from './books'

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

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('Viva, Over 40 Web Club!!')
  }
  const complexClickHandler = (author) => {
    console.log(author)
  }
  return (
    <section className='book'>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        clickHandler
      </button>
      <button type='button' onClick={() => complexClickHandler(author)}>
        complexClickHandler
      </button>
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
