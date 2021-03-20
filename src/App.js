import './App.css';
import React from "react";
import ToDoList from "./Components/ToDoList";

function App(props) {
    return (
        <ToDoList tasks={props.state.tasks} addTask={props.addTask}/>
    )
}



export default App;

