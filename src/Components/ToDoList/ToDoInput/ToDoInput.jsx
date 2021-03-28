import React from "react";


function ToDoInput(props) {
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
            <button className={""} onClick={addTask} onKeyPress={() => addTask()}
                    disabled={props.taskInputText.length === 0}><i>+</i></button>
        </div>
    )
}

export default ToDoInput;