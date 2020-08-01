// Imports
import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"

// Modules
import Header from "./components/layout/Header"
import TodoList from "./components/todo/TodoList"
import AddTodo from "./components/todo/AddTodo"
import "./App.css"

class App extends Component {
    state = {
        todoList: []
    }

    // Toggle complete
    markComplete = id => {
        this.setState({ todoList: this.state.todoList.map(todo => {
            return todo.id !== id ? todo : { ...todo, completed: !todo.completed }
        }) })
    }

    // Delete Todo
    deleteTodo = id => {
        this.setState({ todoList: [...this.state.todoList.filter(todo => todo.id !== id)] })
    }

    // Add Todo
    addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        }
        this.setState({ todoList: [...this.state.todoList, newTodo] })
    }

    render() {
        console.log(this.state.todoList)
        return (
            <>
  
                <div className="todo-container">
                    <Header />
                    <AddTodo addTodo = {this.addTodo} />
                    <TodoList todoList = {this.state.todoList} markComplete = {this.markComplete} deleteTodo = {this.deleteTodo} />
                    {!this.state.todoList.length &&
                    <div className = "light-text">Create a task</div>
                    }
                </div>
            </>
        )
    }
}

export default App