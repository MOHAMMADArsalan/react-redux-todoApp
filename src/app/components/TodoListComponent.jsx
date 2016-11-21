import React from "react";
import TodoItem from "./TodoItemComponent.jsx";

let TodoList = (props) => {
    let Item = props.todos.map((item, index) => {
        return <TodoItem item={item} key={index} index={index} DeleteTodo={props.handleDeleteTodo} />
    })
    return (
        <ul>
            {Item}
        </ul>
    )

}
export default TodoList;