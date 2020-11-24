import React, { Component } from 'react'
import { v1 as uuid } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    items: [
      { id: 1, title: 'wake up' },
      { id: 2, title: 'make breakfast' },
    ],
    id: uuid(),
    item: '',
    editiItem: false,
  }
  handleChange = () => {
    console.log('handle change')
  }
  handleSubmit = () => {
    console.log('handle submit')
  }
  clearList = () => {
    console.log('clear list')
  }
  handleDelete = (id) => {
    console.log(`handle edit ${id}`)
  }
  handleEdit = (id) => {
    console.log(`handle edit ${id}`)
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 max-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput
              item={this.state.items}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editiItem={this.state.editiItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
