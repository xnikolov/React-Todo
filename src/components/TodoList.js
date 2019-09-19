import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render(){

        const {items, handleClearList, handleDeleteItem, handleEditItem} = this.props;

        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    Todo List
                </h3>
                {items.map(item => {
                    return <TodoItem 
                    key={item.id} 
                    title={item.title} 
                    handleDeleteItem={() => handleDeleteItem(item.id)}
                    handleEditItem={() => handleEditItem(item.id)}
                    />
                })}
                <button 
                    type="button" 
                    className="btn btn-danger btn-block my-3"
                    onClick={handleClearList}
                >
                    Clear List
                </button>
            </ul>
        )
    }
}