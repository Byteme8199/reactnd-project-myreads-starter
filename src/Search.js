import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

  state = {
    books: []
  }

  searchBooks = (query) => {
    if(query.length > 1){
      BooksAPI.search(query, 20).then((books) => {
        if(books.length > 1){
          this.setState({ books })
        }
      })
    } else {
      this.setState({ books: []})
    }
  }

  render() {
    const books = this.state.books

    return ( 
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              onChange={(event) => this.searchBooks(event.target.value)}
              type="text"
              placeholder="Search by title or author"/>
          </div>
        </div>
        { books.length > 1 && (
        <div className="search-books-results">
          <ol className="books-grid">
            { books.map((book) => (
              <li key={ book.id }>
                <Book book={book}/>
              </li>
            ))}
          </ol>
        </div>
        )}
      </div>
    )
  }
}

export default Search