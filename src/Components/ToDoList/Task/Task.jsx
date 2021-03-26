import React from "react";

function Task(props) {
    return (
        <li>
            <input className="input_checkbox" type="checkbox" checked={props.isDone}/>
          <div className="task__text">{props.taskText}</div>
        </li>
    )
}

export default Task
