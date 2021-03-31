import React from "react";
import FooterContainer from "./Footer/FooterContainer";
import TasksContainer from "./Task/TasksContainer";
import ToDoInputContainer from "./ToDoInput/ToDoInputContainer.jsx";
import {connect} from "react-redux";
import Footer from "./Footer/Footer";


function ToDoList(props) {

    return (
        <div className="wrapper">
            <header>Todo App</header>
            <ToDoInputContainer />
            <ul className="todoList">
                <TasksContainer tasksList={props.tasksList}/>
            </ul>
            <FooterContainer  />
        </div>

    )

}


export default ToDoList;