import React from "react";
import {addTaskAC, clearAllTasksAC, updateInputTaskAC} from "../redux/state";


function ToDoList(props) {
    let tasksElements = props.state.tasks.map(t => (<Task id={t.id} taskText={t.taskText} isDone={t.isDone}/>))
    let clearAll = () => {
        props.dispatch(clearAllTasksAC())
    }
    return (
        <div className="wrapper">
            <header>Todo App</header>
            <ToDoInput dispatch={props.dispatch} taskInput={props.state.taskInput}/>
            <ul className="todoList">
                {tasksElements}
            </ul>
            <div className="footer">
                <ul className="breadcrumb">
                    <li>All</li>
                    <li><a href="#">In progress</a></li>
                    <li><a href="#">Done</a></li>
                </ul>
                <button onClick={clearAll}>Clear All</button>

            </div>
        </div>

    )

}

function ToDoInput(props) {
    let newTextTask = React.createRef()
    let addTask = () => {
        props.dispatch(addTaskAC())
    }
    let onInputChange = () => {
        let text = newTextTask.current.value
        props.dispatch(updateInputTaskAC(text))
    }
    return (
        <div className="inputField">
            <input type="text" placeholder="Add your new todo" ref={newTextTask} onChange={onInputChange} value={props.taskInput}/>
            <button className={"fas fa-plus"} onClick={addTask}><i>+</i></button>
        </div>
    )
}

function Task(props) {
    return (
        <li>
            <input className="input_checkbox" type="checkbox" checked={props.isDone}/>
            {props.taskText}
        </li>
    )
}

export default ToDoList;