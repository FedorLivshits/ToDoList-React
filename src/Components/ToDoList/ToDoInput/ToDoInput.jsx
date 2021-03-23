import React from "react";


function ToDoInput(props) {
    debugger
    let addTask = () => {
        props.addTask()
    }
    let onInputChange = (event) => {
        let text = event.target.value
        props.updateInputTask(text)
    }
    return (
        <div className="inputField">
            <input type="text" placeholder="Add your new todo" onChange={onInputChange} value={props.taskInputText}/>
            <button className={"fas fa-plus"} onClick={addTask}><i>+</i></button>
        </div>
    )
}

export default ToDoInput;