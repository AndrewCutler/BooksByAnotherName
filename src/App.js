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
        <div className='row'>
          <div className='col s6'>
            <Search />
          </div>
          <div className='col s6'>
            <Translate />
          </div>
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App)
