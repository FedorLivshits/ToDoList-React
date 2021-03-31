import { combineReducers, createStore } from "redux";
import todoReducer from "./todo-reducer";
import filterReducer from "./filter-reducer";

let reducers = combineReducers({
    todoPage: todoReducer,
    ToDoFilter: filterReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;