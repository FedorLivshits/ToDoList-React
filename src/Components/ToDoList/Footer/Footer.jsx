import React from "react";

function Footer({clearAllTasks}) {
        let onClearAll = () => {
        clearAllTasks()
    }
    return (
        <div className="footer">
            <ul className="breadcrumb">
                <li><a >All</a></li>
                <li><a >In progress</a></li>
                <li><a >Done</a></li>
            </ul>
            <button onClick={onClearAll}>Clear All</button>
        </div>
    )
}

export default Footer;

