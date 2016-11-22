import React from "react";
import AddTodo from "./../components/TodoAddComponent.jsx";
import TodoList from "./../components/TodoListComponent.jsx"
class Todo extends React.Component {

    constructor() {
        super();

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    //handler for Add Todo
    handleAddTodo(input) {
        if (input.value) { //if input value is not empty then add
            this.props.addTodo(input.value); // call the addTodo dispatch
            input.value = ""; // clear the input field
        }
    }
    //handler for Delete Todo
    handleDeleteTodo(index) {
        this.props.deleteTodo(index) // call the delete Todo dispatch
    }
    render() {
        return (

            <div className="col-sm-12" style={{marginTop:"25px"}}>
                <AddTodo
                    AddTodo={this.handleAddTodo}
                    />
                <TodoList
                    todos={this.props.todos}
                    handleDeleteTodo={this.handleDeleteTodo}
                    />
            </div>
        )
    }
}

export default Todo;