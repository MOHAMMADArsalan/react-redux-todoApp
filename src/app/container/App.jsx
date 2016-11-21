import React from "react";
import ReactDOM from "react-dom";
import Todo from "./TodoContainer.jsx";
import { connect } from "react-redux";
// App Component 
class App extends React.Component {
    render() {
        return (
            <div>
                <Todo 
                    todos={this.props.todo}
                    addTodo={this.props.AddTodo} 
                    deleteTodo={this.props.deleteTodo}
                />
            </div>
        )
    }
}
//
const mapStateToProps = (state) => {
    return {
        todo: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddTodo: (item) => {
            dispatch({
                type: "ADD_TODO",
                payload: item
            })
        },
        deleteTodo: (index) => {
            dispatch({
                type:"DELETE_TODO",
                index: index
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);