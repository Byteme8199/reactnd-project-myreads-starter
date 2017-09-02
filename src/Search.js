import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {

  render() {
    /** Deconstruct the props */
    const books = this.props.searchBooksList

    /**
      Return the serach input and update the state.searchBooksList
      whenever the user types more than 1 letter into the input field

      All books in the state.searchBooksList will be rendered via 
      the Books component (and hence will also have the shelf selector)

      Also, let's have a route to the index page using Link from
      the React Router
    */
    return ( 
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              onChange={(event) => this.props.searchBooks(event.target.value)}
              type="text"
              value={this.props.query}
              placeholder="Search by title or author"/>
          </div>
        </div>
        { books.length > 1 && (
        <div className="search-books-results">
          <ol className="books-grid">
            { books.map((book) => (
              <li key={ book.id }>
                <Book 
                  updateShelf={this.props.updateShelf} 
                  shelf='none'
                  book={book} />
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