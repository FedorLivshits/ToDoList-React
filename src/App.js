import './App.css';
import React from "react";
import ToDoList from "./Components/ToDoList";

function App(props) {
    return (
        <ToDoList state={props.state} dispatch={props.dispatch}/>
    )
}



export default App;

