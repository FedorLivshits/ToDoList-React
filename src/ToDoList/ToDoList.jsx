import React from "react";

function ToDoList() {

    return (
        <div className="wrapper">
            <header>Todo App</header>
            <div className="inputField">
                <input type="text" placeholder="Add your new todo"/>
                <button><i className="fas fa-plus">+</i></button>
            </div>
            <ul className="todoList">
            </ul>
            <div className="footer">
                <span>You have <span className="pendingTasks">
                </span>pending tasks</span>
                <button>Clear All</button>
            </div>
        </div>

    )

}

export default ToDoList;