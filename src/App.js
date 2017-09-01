import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import List from './List'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    categories: [
      { slug: 'currentlyReading', title: 'Currently Reading'},
      { slug: 'wantToRead', title: 'Want to Read'},
      { slug: 'read', title: 'Read'}
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={({ history }) => (
          <Search />
        )}/>
        <Route exact path='/' render={() => (
          <List bookList={this.state.books} categories={ this.state.categories } />
        )}/>
      </div>
    )
  }
}

export default BooksApp
