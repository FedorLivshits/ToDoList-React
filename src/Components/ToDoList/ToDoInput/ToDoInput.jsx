import React from "react";
import {addTaskAC, updateInputTaskAC} from "../../../redux/todo-reducer";

function ToDoInput(props) {
    let addTask = () => {
        props.dispatch(addTaskAC())
    }
    let onInputChange = (event) => {
        let text = event.target.value
        props.dispatch(updateInputTaskAC(text))
    }
    return (
        <div className="inputField">
            <input type="text" placeholder="Add your new todo" onChange={onInputChange} value={props.taskInput}/>
            <button className={"fas fa-plus"} onClick={addTask}><i>+</i></button>
        </div>
    )
}

export default ToDoInput;