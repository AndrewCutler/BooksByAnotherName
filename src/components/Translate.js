import React, { Component } from 'react'

export default class Translate extends Component {
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
    return (
      <div className='container'>
        <h4>Let's translate books back and forth!</h4>
        <form>
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}
