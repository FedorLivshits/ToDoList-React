import React from "react";


function ToDoList(props) {
    let tasks = [
        {id: 1, taskText: 'Написать проект на реакте', isDone: false},
        {id: 2, taskText: 'Дополнить гитхаб профиль', isDone: false},
        {id: 3, taskText: 'Систематизировать знания', isDone: false},
    ]
    let tasksElements = tasks.map(t => (<Task id={t.id} taskText={t.taskText} isDone={t.isDone}/>))
    return (
        <div className="wrapper">
            <header>Todo App</header>
            <ToDoInput/>
            <ul className="todoList">
            {tasksElements}
            </ul>
            <div className="footer">
                <span>You have <span className="pendingTasks">
                </span>pending tasks</span>
                <button>Clear All</button>
            </div>
        </div>

    )

}

function ToDoInput(props) {
    return (
        <div className="inputField">
            <input type="text" placeholder="Add your new todo"/>
            <button><i className="fas fa-plus">+</i></button>
        </div>
    )
}

function Task(props) {
    return (
        <li>{props.taskText}</li>
    )
}

export default ToDoList;