import React from "react";

function Task(props) {
    return (
        props.tasks.map(t => <li>
            <input className="input_checkbox" type="checkbox" checked={t.isDone}
                   onClick={t.isDone ? () => props.unCompleteTask(t.id) : () => props.completeTask(t.id)}/>
            <div className={t.isDone ? "task__text  done" : "task__text"}>{t.taskText}</div>
            <span className="icon">Х</span>
        </li>)

    )
}


export default Task

