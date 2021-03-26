import React from "react";
import Task from "./Task/Task";
import ToDoInputContainer from "./ToDoInput/ToDoInputContainer";
import FooterContainer from "./Footer/FooterContainer";
import TaskContainer from "./Task/TaskContainer";


function ToDoList(props) {
    return (
        <div className="wrapper">
            <header>Todo App</header>
            <ToDoInputContainer />
            <ul className="todoList">
                <TaskContainer/>
            </ul>
            <FooterContainer/>
        </div>

    )

}


export default ToDoList;