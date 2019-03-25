import React, { Component } from 'react'

export default class BookCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const book = this.props.results
    const index = this.props.index

    return (
      <div>
        <h4>{book[index].title}</h4>
        <span>{book[index].author_name[0]}</span>
        <img
          src={`https://covers.openlibrary.org/w/id/${
            book[index].cover_i
          }-L.jpg`}
          alt=''
        />
      </div>
    )
  }
}
