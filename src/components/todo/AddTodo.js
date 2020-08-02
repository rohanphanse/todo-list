import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: ""
    }

    onSubmit = event => {
        event.preventDefault()
        if (this.state.title.trim()) {
            this.props.addTodo(this.state.title)
            this.setState({ title: "" })
        }
    }

    onChange = event => this.setState({ title: event.target.value })

    render() {
        return (
            <>
                <form onSubmit = {this.onSubmit} className="input-container">
                    <input 
                        className = "input" 
                        type = "text" 
                        name = "title" 
                        placeholder = "Add Todo" 
                        value = {this.state.title} 
                        onChange = {this.onChange}
                    />
                    <button className = "submit" type = "submit">
                        <i className = "fab fa-telegram-plane"></i>
                    </button>
                </form>
                <style jsx>{`
                    .input-container {
                        position: relative;
                    }

                    .input {
                        width: 100%;

                        padding: 10px 15px;
                        border: 1px solid rgb(192, 192, 192); 
                        border-radius: 8px;

                        font-size: 1rem;
                        transition-duration: 0.2s;
                    }
                    
                    .input:focus {
                        border: 1px solid rgb(102, 161, 250); 
                        box-shadow: 0 0 0 3px rgba(0, 162, 255, 0.205);
                
                        z-index: 1;
                    }

                    .submit {
                        position: absolute;
                        right: 1px;
                        top: 20.25px;
                        transform: translateY(-50%);
                        transition-duration: 0.2s;
                        
                        border-left: 1px solid rgb(192, 192, 192); 
                        border-radius: 0 7px 7px 0;

                        font-size: 1.2rem;
                        color: rgb(100, 100, 100);
                        background-color: rgb(240, 240, 240);
                        height: calc(100% - 2px);
                        padding: 0 12px;
                    }

                    .submit:hover {
                        background-color: rgb(230, 230, 230);
                    }

                `}</style>
            </>
        )
    }
}

export default AddTodo
