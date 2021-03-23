import React from "react";
import {clearAllTasksAC} from "../../../redux/todo-reducer";


function Footer(props) {
    let clearAll = () => {
        props.dispatch(clearAllTasksAC())
    }
    return (
        <div className="footer">
            <ul className="breadcrumb">
                <li>All</li>
                <li><a href="#">In progress</a></li>
                <li><a href="#">Done</a></li>
            </ul>
            <button onClick={clearAll}>Clear All</button>
        </div>
    )
}

export default Footer;

