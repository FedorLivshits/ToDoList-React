import React from "react";
import FooterContainer from "./Footer/FooterContainer";
import TaskContainer from "./Task/TaskContainer";
import ToDoInputContainer from "./ToDoInput/ToDoInputContainer.jsx";


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