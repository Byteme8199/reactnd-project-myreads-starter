import React, { Component } from 'react'

class SelectShelf extends Component {

	handleChange = (event) => {
    console.log(event)
  }

  render() {
  	const shelf = this.props.shelf

  	return (
	  	<div>
		  	<select value={shelf} onChange={(event) => this.handleChange(event.target.value)}>
			    <option value="none" disabled>Move to...</option>
			    <option value="currentlyReading">Currently Reading</option>
			    <option value="wantToRead">Want to Read</option>
			    <option value="read">Read</option>
			    <option value="none">None</option>
			  </select>
		  </div>
	  )
	}
}

export default SelectShelf