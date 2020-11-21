import React from 'react'

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

export default Book
