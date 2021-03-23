import './App.css';
import React from "react";
import ToDoList from "./Components/ToDoList/ToDoList";

function App(props) {
    return (
        <ToDoList store={props.store}/>
    )
}



export default App;

