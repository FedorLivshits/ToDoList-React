import React from "react";

function Task(props) {
    return (
        props.tasks.map(t => <li>
            <input className="input_checkbox" type="checkbox" checked={t.isDone}
                   onClick={t.isDone ? () => props.unCompleteTask(t.id) : () => props.completeTask(t.id)}/>
            <div className={t.isDone ? "task__text  done" : "task__text"}>{t.taskText}</div>
            <a className="icon" onClick={() => props.deleteTask(t.id)}>Х</a>
        </li>)

    )
}


export default Task

