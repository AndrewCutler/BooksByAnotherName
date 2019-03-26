import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import Translate from './components/Translate'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Search />
        <Translate />
      </div>
    )
  }
}

export default App
