import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-dark text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Todo"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button 
                        type="submit"
                        className={`btn btn-block mt-4 ${editItem ? 'btn-success' : 'btn-dark'}`}
                    >
                        {editItem ? 'Edit task' : 'Add new'}
                    </button>
                </form>
            </div>
        )
    }
}
