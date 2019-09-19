import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {

        const {title, handleDeleteItem, handleEditItem} = this.props;

        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icons">
                    <span className="text-success mx-2" onClick={handleEditItem}>
                        <i className="fas fa-edit"/>
                    </span>
                    <span className="text-danger mx-2" onClick={handleDeleteItem}>
                        <i className="fas fa-trash"/>
                    </span>
                </div>
            </li>
        )
    }
}
