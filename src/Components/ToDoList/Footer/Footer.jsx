import React from "react";

function Footer(props) {
        let onClearAll = () => {
        props.clearAllTasks()
    }
    return (
        <div className="footer">
            <ul className="breadcrumb">
                <li><a onClick={() => props.allTasks(props.tasks.id)}>All</a></li>
                <li><a onClick={() => props.inProgressTasks(props.tasks.id)}>In progress</a></li>
                <li><a onClick={() => props.doneTasks(props.tasks.id)}>Done</a></li>
            </ul>
            <button onClick={onClearAll}>Clear All</button>
        </div>
    )
}

export default Footer;

