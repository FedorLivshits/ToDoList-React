import React from "react";

function Task({tasks, unCompleteTask, completeTask, deleteTask}) {
    return (
        tasks.map(t => <li>
            <input className="input_checkbox" type="checkbox" checked={t.isDone}
                   onClick={t.isDone ? () => unCompleteTask(t.id) : () => completeTask(t.id)}/>
            <div className={t.isDone ? "task__text  done" : "task__text"}>{t.taskText}</div>
            <a className="icon" onClick={() => deleteTask(t.id)}>Х</a>
        </li>)

    )
}


export default Task

