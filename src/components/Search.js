import React, { Component } from 'react'

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
    fetch(`http://openlibrary.org/search.json?q=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          results: data.docs
        })
      )
  }

  handleChange = e => {
    e.preventDefault()

    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.getResults()
    console.log(this.state.results)
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.searchTerm} onChange={this.handleChange} />
          <button type='submit' onClick={this.handleSubmit}>
            Search
          </button>
        </form>
      </div>
    )
  }
}
