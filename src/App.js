import React, {Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: '',
    isEditing: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    
    const updatedItems = [...this.state.items, newItem]; 
  
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      isEditing: false
    })
  }

  handleClearList = (e) => {
    this.setState({
      items: [],
      })
    }

  handleDeleteItem = (id) => {
    const filteredArray = this.state.items.filter(item => 
      item.id !== id)
    
      this.setState({
        items: filteredArray
      })
  }

  handleEditItem = (id) => {
    const filteredArray = this.state.items.filter(item =>
      item.id !== id)

      this.setState({
        items: filteredArray
      })

      

  }

  

  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4 ">
            <h1 className="text-capitalize text-center">Todo-Daily</h1>
            <p className="text-center mb-5">Organize your world!</p>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList 
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDeleteItem={this.handleDeleteItem}
              handleEditItem={this.handleEditItem}
            />
          </div>
        </div>
    </div>
      
    );
  }
  
}

export default App;
