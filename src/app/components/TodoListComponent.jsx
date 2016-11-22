import React from "react";
import TodoItem from "./TodoItemComponent.jsx";

let TodoList = (props) => {
    let Item = props.todos.map((item, index) => {
        return <TodoItem item={item} key={index} index={index} DeleteTodo={props.handleDeleteTodo} />
    })
    return (
        <div className="col-sm-8 col-sm-offset-3">
            <ul className="col-sm-6 list-group">
                {Item}
            </ul>
        </div>
    )

}
export default TodoList;