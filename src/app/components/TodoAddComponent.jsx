import React from "react";

let input,
    AddTodo = (props) => {
        return (
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    props.AddTodo(input)
                }
            }>
                <input ref={(node) => { input = node } } />
                <button>ADD</button>
            </form>
        )
    }

export default AddTodo;