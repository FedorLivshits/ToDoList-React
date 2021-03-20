import React from "react";


function ToDoList(props) {
    let tasksElements = props.tasks.map(t => (<Task id={t.id} taskText={t.taskText} isDone={t.isDone}/>))
    return (
        <div className="wrapper">
            <header>Todo App</header>
            <ToDoInput addTask={props.addTask}/>
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
    let newTextTask = React.createRef()
    let addTask = () => {
        let text = newTextTask.current.value
        props.addTask(text)
    }
    return (
        <div className="inputField">
            <input type="text" placeholder="Add your new todo" ref={newTextTask}/>
            <button className={"fas fa-plus"} onClick={addTask}><i >+</i></button>
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