import React from "react";

function Tasks({tasksList, unCompleteTask, completeTask, deleteTask}) {
    debugger
    return (
        tasksList.tasksList.map(t => <li>
            <input className="input_checkbox" type="checkbox" checked={t.isDone}
                   onClick={t.isDone ? () => unCompleteTask(t.id) : () => completeTask(t.id)}/>
            <div className={t.isDone ? "task__text  done" : "task__text"}>{t.taskText}</div>
            <a className="icon" onClick={() => deleteTask(t.id)}>Х</a>
        </li>)

    )
}


export default Tasks

