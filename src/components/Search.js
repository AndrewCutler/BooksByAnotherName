import React, { Component } from 'react'
import BookCard from './BookCard'

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      results: [],
      searchTerm: '',
      errors: {}
    }
  }

  //mount component
  componentDidMount() {
    // this.getResults()
  }

  //get search results
  getResults() {
    fetch(`http://openlibrary.org/search.json?title=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          results: data.docs
        })
      )
  }

  //event handlers
  handleChange = e => {
    e.preventDefault()

    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.getResults()
  }

  render() {
    let booksDisplay = []
    if (this.state.results.length > 0) {
      for (let i = 0; i < 5; i++) {
        booksDisplay.push(
          <BookCard results={this.state.results} index={i} key={i} />
        )
      }
    }

    return (
      <div>
        <form>
          <input value={this.state.searchTerm} onChange={this.handleChange} />
          <button type='submit' onClick={this.handleSubmit}>
            Search
          </button>
        </form>
        {booksDisplay}
      </div>
    )
  }
}
