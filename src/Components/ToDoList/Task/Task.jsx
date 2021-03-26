import React from "react";

function Task(props) {
    return (
        <li>
            <input className="input_checkbox" type="checkbox" checked={props.isDone} onClick={props.isDone ? props.unCompleteTask : props.completeTask}/>
          <div className="task__text">{props.taskText}</div>
        </li>
    )
}

export default Task
