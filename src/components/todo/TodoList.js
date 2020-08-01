// Imports
import React, { Component } from "react"
import PropTypes from "prop-types"

// Modules
import Todo from "./Todo"

class TodoList extends Component {
    render() {
        return this.props.todoList.map((todo) => (
            <Todo key = {todo.id} todo = {todo} markComplete = {this.props.markComplete} deleteTodo = {this.props.deleteTodo} />
        ))
    }
}

// Prop types
TodoList.propTypes = {
    todoList: PropTypes.array.isRequired
}

export default TodoList