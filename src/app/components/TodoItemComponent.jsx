import React from "react";

let TodoItem = (props) => {
    return (
        <li>
            {props.item} <button onClick={()=>{props.DeleteTodo(props.index)}}>Delete</button>
        </li>
    )
}
export default TodoItem;