import React, { Component } from 'react'

class SelectShelf extends Component {

  render() {
  	/** Deconstruct the props */
  	let shelf = this.props.shelf
  	const book = this.props.book

  	/** 
  		Return the SelectShelf with the correctly selected drop-down
  		On change, update the shelf designation using the passed 
  		updateShelf function
  	*/
  	return (
	  	<select value={shelf} onChange={(event) => this.props.updateShelf(book, event.target.value)}>
		    <option value="" disabled>Move to...</option>
		    <option value="currentlyReading">Currently Reading</option>
		    <option value="wantToRead">Want to Read</option>
		    <option value="read">Read</option>
		    <option value="none">None</option>
		  </select>
	  )
	}
}

export default SelectShelf