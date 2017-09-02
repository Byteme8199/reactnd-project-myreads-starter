import React, { Component } from 'react'
import SelectShelf from './SelectShelf'

class Book extends Component {
	
  render() {
  	/** Deconstruct the props */
  	const book = this.props.book
  	const shelf = this.props.shelf

  	/** 
  		Return the book item with all the applicable assets
  		and attach the SelectShelf Component while passing in the correct
  		book object
  	*/
    return (
      <div className="book">
	      <div className="book-top">
	        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}></div>
	        <div className="book-shelf-changer">
	        	{/* Load the SelectShelf Component */}
	          <SelectShelf 
	          	updateShelf={this.props.updateShelf} 
	          	book={book} 
	          	shelf={shelf} />
	        </div>
	      </div>
	      <div className="book-title">
	      	{/* As long as we have a value, show it */}
	      	{ book.title && (
	      		book.title
	      	)}
	      </div>
	      <div className="book-authors">
	      	{/* 
	      		As long as we have a value show it, 
	      	  and also join them if there are multiple authors
	      	*/}
	      	{ book.authors && (
	      		book.authors.join(', ')
	      	)}
	      </div>
	    </div>
    )
  }
}

export default Book