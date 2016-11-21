import {
    createStore
} from "redux";
import TodoReducer from "./../reducers/todoReducer";
// create Store and passing reducer 
const store = createStore(TodoReducer);
store.subscribe(() => {
    console.log("state Updated: ", store.getState());
})
export default store;
