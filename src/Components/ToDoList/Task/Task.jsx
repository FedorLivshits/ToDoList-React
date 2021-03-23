import React from "react";

function Task(props) {
    return (
        <li>
            <input className="input_checkbox" type="checkbox" checked={props.isDone}/>
            {props.taskText}
        </li>
    )
}

export default Task
