import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

const Types = {
  ITEM: 'book'
}

const bookDrop = {
  hover(props, monitor) {},

  drop(props, monitor) {
    const book = monitor.getItem()

    let iterations = []

    //english to japanese
    const queryFirst = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ja&dt=t&q=${
      book.title
    }`

    fetch(queryFirst)
      .then(res => res.json())
      .then(data => {
        iterations.push(data[0][0][0])

        //japanese to finnish
        const secondQuery = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=fi&dt=t&q=${
          iterations[0]
        }`

        return fetch(secondQuery)
      })
      .then(res => res.json())
      .then(data => {
        iterations.push(data[0][0][0])

        //finnish to hungarian
        const thirdQuery = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fi&tl=hu&dt=t&q=${
          iterations[1]
        }`

        return fetch(thirdQuery)
      })
      .then(res => res.json())
      .then(data => {
        iterations.push(data[0][0][0])

        //hungarian to english
        const fourthQuery = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=hu&tl=en&dt=t&q=${
          iterations[2]
        }`

        return fetch(fourthQuery)
      })
      .then(res => res.json())
      .then(data => iterations.push(data[0][0][0]))
    console.log(iterations)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class Translate extends Component {
  constructor(props) {
    super(props)
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
    const { isOver, connectDropTarget } = this.props

    return connectDropTarget(
      <div className='container'>
        <h4>Let's translate books back and forth!</h4>
        <div className='dropbox' />
      </div>
    )
  }
}

export default DropTarget(Types.ITEM, bookDrop, collect)(Translate)
