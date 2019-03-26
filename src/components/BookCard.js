import React, { Component } from 'react'
import nocover from './assets/nocover.png'

export default class BookCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const book = this.props.results
    const index = this.props.index
    const cover = book[index].cover_i
      ? `https://covers.openlibrary.org/w/id/${book[index].cover_i}-L.jpg`
      : nocover
    const title = book[index].title
    const author = book[index].author_name[0]

    return (
      <div className='row'>
        <div className='col s12'>
          <div className='card'>
            <div className='card-image'>
              <img src={cover} alt={book[index].title} />

              <div>
                <h4>{title}</h4>
                <span>{author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
