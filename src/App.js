import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import List from './List'
import './App.css'

class BooksApp extends React.Component {
  /** Keep the list of Books, searchBooks and Categories as state */
  state = {
    books: [],
    searchBooksList: [],
    query: "",
    categories: [
      { slug: 'currentlyReading', title: 'Currently Reading'},
      { slug: 'wantToRead', title: 'Want to Read'},
      { slug: 'read', title: 'Read'}
    ]
  }

  /** 
    When the App loads, call the 
    BooksAPI getAll method and setState the return 
  */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  /** Reload the Books if needed */
  reloadBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  /** Update the shelf designation for a single book, then reload */
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.reloadBooks()
    })
  }

  /** Search the BooksAPI based on a query */
  searchBooks = (query) => {
    this.setState({query})
    if(query.length > 1){
      BooksAPI.search(query, 20).then((searchBooks) => {
        if(searchBooks.length > 1){
          this.setState({ searchBooksList: searchBooks })
        }
      })
    } else {
      this.setState({ searchBooksList: []})
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={({ history }) => (
          /** 
            Pass the Search Component the list of searchable books,
            the function to call to SearchBooks and setState
            and the function to update a books shelf designation
            also pass the state.query so we can basically 'remember' what
            we previously searched for and have it loaded when we come back
          */
          <Search 
            query={this.state.query}
            searchBooksList={this.state.searchBooksList} 
            searchBooks={this.searchBooks} 
            updateShelf={this.updateShelf} />
        )}/>
        <Route exact path='/' render={() => (
          /**
            Pass the List Component the list of MyReads books,
            the categories that make up the shelf designations
            (I would call an API for this if it existed, to sync 
            more accurately between Front-end and Back-end)
            and the function to update a books shelf designation
          */
          <List 
            updateShelf={this.updateShelf} 
            bookList={this.state.books} 
            categories={ this.state.categories } />
        )}/>
      </div>
    )
  }
}

export default BooksApp
