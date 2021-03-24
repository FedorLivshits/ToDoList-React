import React from "react";
import Task from "./Task/Task";
import ToDoInputContainer from "./ToDoInput/ToDoInputContainer";
import FooterContainer from "./Footer/FooterContainer";


function ToDoList(props) {
    let tasksElements = props.store.getState().todoPage.tasks.map(t => (<Task id={t.id} taskText={t.taskText} isDone={t.isDone}/>))

    return (
        <div className="wrapper">
            <header>Todo App</header>
            <ToDoInputContainer store={props.store}/>
            <ul className="todoList">
                {tasksElements}
            </ul>
            <FooterContainer store={props.store}/>
        </div>

    )

}


export default ToDoList;