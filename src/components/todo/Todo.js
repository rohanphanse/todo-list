// Imports
import React, { Component } from "react"
import PropTypes from "prop-types"

export class Todo extends Component {
    render() {
        const { id, title, completed } = this.props.todo
        return (
            <>
                <div className = "todo">
                    <button className = { completed ? "check btn checked" : "check btn" } onClick = {this.props.markComplete.bind(this, id)}>
                        <i className = "fas fa-check"></i>
                    </button>
                    <div className = "todo-title" style = {{ textDecoration: completed ? "line-through" : "none" }}>{ title }</div>
                    <button className = "delete btn btn-hover" onClick = {this.props.deleteTodo.bind(this, id)}>
                        <i className = "far fa-trash-alt"></i>
                    </button>
                </div>
                <style jsx>{`
                    .todo {
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        height: 40.5px;
                        padding: 8.25px;
                        margin: 15px 0;
                        border: 1px solid rgb(192, 192, 192);
                        border-radius: 8px;
                    }

                    .todo-title {
                        color: rgb(75, 75, 75);
                        margin-left: 50px;
                    }

                    .btn {
                        position: absolute;
                        top: 19.25px;
                        transform: translateY(-50%);

                        font-size: 1.2rem;
                        color: rgb(100, 100, 100);
                        background-color: rgb(240, 240, 240);
                        height: calc(100%);
                        padding: 0 12px;
                    }

                    .btn-hover:hover {
                        transition-duration: 0.15s;
                        background-color: rgb(230, 230, 230);
                    }

                    .delete {
                        right: 0px;
                        border-radius: 0 7px 7px 0;
                        border-left: 1px solid rgb(192, 192, 192); 
                    }

                    .check {
                        left: 0px;
                        border-radius: 7px 0 0 7px;
                        border-right: 1px solid rgb(192, 192, 192); 
                        color: rgb(192, 192, 192);
                    }

                    .checked {
                        color: rgb(100, 100, 100);
                    }
                `}</style>
            </>
        )
    }
}

// Prop types
Todo.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todo
