import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {

        const{ item, handleChange, handleSubmit } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" 
                            className="form-control" 
                            placeholder="Add a new Todo"
                            value={item}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-block btn-primary my-2">Add</button>
                </form>
            </div>
        )
    }
}
