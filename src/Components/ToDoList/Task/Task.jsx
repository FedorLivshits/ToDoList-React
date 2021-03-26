import React from "react";

function Task(props) {
    return (
        props.tasks.map(t => <li>
            <input className="input_checkbox" type="checkbox" checked={t.isDone}
                   onClick={t.isDone ? () => props.unCompleteTask(t.id) : () => props.completeTask(t.id)}/>
            <div className="task__text">{t.taskText}</div>
        </li>)

    )
}


export default Task

