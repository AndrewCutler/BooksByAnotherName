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
          <BookCard
            cover={this.state.results[i].cover_i}
            title={this.state.results[i].title}
            author={this.state.results[i].author_name[0]}
            results={this.state.results}
            index={i}
            key={i}
          />
        )
      }
    }

    return (
      <div style={{ margin: 'auto' }}>
        <form>
          <div className='input-field'>
            <input
              type='text'
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <button
              className='btn waves-effect waves-light light-blue'
              type='submit'
              onClick={this.handleSubmit}
            >
              Search
            </button>
          </div>
        </form>
        {booksDisplay}
      </div>
    )
  }
}
