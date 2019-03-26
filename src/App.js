import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import Translate from './components/Translate'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

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

export default DragDropContext(HTML5Backend)(App)
