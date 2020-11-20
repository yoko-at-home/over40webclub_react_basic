import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function BookList() {
  return (
    <div>
<h1 style={{textAlign:'center', paddingTop:30}}>Over 40 Web Club Booklist</h1>
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
    </div>
  )
}

const Book = () => {
  return (
    <section className='book'>
      <img src="https://images-eu.ssl-images-amazon.com/images/I/71FXfPs-iyL._AC_UL200_SR200,200_.jpg" alt="" />
      <h2>Where the Crawdads Sing</h2>
      <h4>Delia Owen</h4>
    </section>


)

}

ReactDom.render(<BookList />, document.getElementById('root'))
