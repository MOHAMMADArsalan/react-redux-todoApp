// initialState for App
export const initialState = {
    todos: []
}
//Todo Reducer Funtion 
const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": // Add new Todo and return new state;
            state = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break;
        case "DELETE_TODO": // DELETE todo and return new state
            let newTodo = state.todos.slice(0);
            newTodo.splice(action.index,1);
            state = {
                ...state,
                todos: newTodo
            }
        default: // nothing case is match then return state
            return state;
            break;
    }
    return state;
}

export default TodoReducer;