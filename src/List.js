import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'

class List extends Component {

  render() {
    const books = this.props.bookList
    const categories = this.props.categories

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { categories.map((category) => (
            <div className="bookshelf" key={category.slug}>
              <h2 className="bookshelf-title">{ category.title }</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { books.filter( book => book.shelf === category.slug).map((book) => (
                    <li key={ book.id }>
                      <Book book={book} shelf={book.shelf}/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default List