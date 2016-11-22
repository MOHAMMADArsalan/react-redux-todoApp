import React from "react";

let TodoItem = (props) => {
    return (
        <li className="list-group-item">
            {props.item}
            <button style={{ marginLeft: "25px" }}
                className="btn btn-danger"
                onClick={() => { props.DeleteTodo(props.index) } }
                >
                <i className="glyphicon glyphicon-trash"></i> Delete</button>
        </li>
    )
}
export default TodoItem;