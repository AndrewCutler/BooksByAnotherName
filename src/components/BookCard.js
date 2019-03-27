import React, { Component } from 'react'
import nocover from './assets/nocover.png'
import { DragSource } from 'react-dnd'

const Types = {
  ITEM: 'book'
}

const itemSource = {
  beginDrag(props) {
    //which of these, if either, is valid?
    // return { title: this.title, author: props.results[0].author_name[0] }
    const item = { title: this.title, propTitle: props.results[0].title, id: 1 }
    return item
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class BookCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    // const book = this.props.results
    // const index = this.props.index
    const cover = this.props.cover
      ? `https://covers.openlibrary.org/w/id/${this.props.cover}-L.jpg`
      : nocover
    // const title = book[index].title
    // const author = book[index].author_name[0] //breaks sometimes, e.g. search '2984'

    const { isDragging, connectDragSource } = this.props

    return connectDragSource(
      <div className='row' style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className='col s12'>
          <div className='card'>
            <div className='card-image'>
              <img src={cover} alt={this.props.title} />

              <div>
                <h4>{this.props.title}</h4>
                <span>{this.props.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(BookCard)
