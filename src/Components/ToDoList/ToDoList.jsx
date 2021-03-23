import React from "react";
import {addTaskAC, clearAllTasksAC, updateInputTaskAC} from "../../redux/todo-reducer";
import ToDoInput from "./ToDoInput/ToDoInput";
import Task from "./Task/Task";
import Footer from "./Footer/Footer";


function ToDoList(props) {
    let tasksElements = props.state.todoPage.tasks.map(t => (<Task id={t.id} taskText={t.taskText} isDone={t.isDone}/>))

    return (
        <div className="wrapper">
            <header>Todo App</header>
            <ToDoInput dispatch={props.dispatch} taskInput={props.state.todoPage.taskInput}/>
            <ul className="todoList">
                {tasksElements}
            </ul>
            <Footer dispatch={props.dispatch}/>
        </div>

    )

}


export default ToDoList;