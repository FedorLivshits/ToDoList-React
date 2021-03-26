import React from "react";


function Footer(props) {
    debugger
    let onClearAll = () => {
        props.clearAllTasks()
    }
    return (
        <div className="footer">
            <ul className="breadcrumb">
                <li>All</li>
                <li><a href="#">In progress</a></li>
                <li><a href="#">Done</a></li>
            </ul>
            <button onClick={onClearAll}>Clear All</button>
        </div>
    )
}

export default Footer;

