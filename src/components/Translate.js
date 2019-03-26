import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

const Types = {
  ITEM: 'book'
}

const bookDrop = {
  hover(props, monitor, component) {
    console.log(props)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Translate extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  handleChange = e => {
    e.preventDefault()

    this.setState({
      title: e.target.value
    })
  }

  render() {
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div className='container'>
        <h4>Let's translate books back and forth!</h4>
        <div className='dropbox' />
      </div>
    )
  }
}

export default DropTarget(Types.ITEM, bookDrop, collect)(Translate)
