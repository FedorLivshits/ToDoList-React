import React from "react";
import Task from "./Task/Task";
import ToDoInputContainer from "./ToDoInput/ToDoInputContainer";
import FooterContainer from "./Footer/FooterContainer";


function ToDoList(props) {
    let tasksElements = props.tasks.map(t => (<Task id={t.id} taskText={t.taskText} isDone={t.isDone} key={t.id}/>))

    return (
        <div className="wrapper">
            <header>Todo App</header>
            <ToDoInputContainer />
            <ul className="todoList">
                {tasksElements}
            </ul>
            <FooterContainer/>
        </div>

    )

}


export default ToDoList;