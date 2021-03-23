import React from "react";
import {addTaskAC, updateInputTaskAC} from "../../../redux/todo-reducer";
import ToDoInput from "./ToDoInput";

function ToDoInputContainer(props) {
    let addTask = () => {
        props.store.dispatch(addTaskAC())
    }
    let onInputChange = (text) => {
        props.store.dispatch(updateInputTaskAC(text))
    }
    return ( <ToDoInput addTask={addTask} updateInputTask={onInputChange} taskInputText={props.store.getState().todoPage.taskInputText}/> )
}

export default ToDoInputContainer;