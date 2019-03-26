import React, { Component } from 'react'
import nocover from './assets/nocover.png'
import { DragSource } from 'react-dnd'

const Types = {
  ITEM: 'book'
}

const itemSource = {
  beginDrag(props) {
    //which of these, if either, is valid?
    return { title: this.title, author: props.results[0].author_name[0] }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class BookCard extends Component {
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
    const { isDragging, connectDragSource, src } = this.props

    return connectDragSource(
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

export default DragSource(Types.ITEM, itemSource, collect)(BookCard)
