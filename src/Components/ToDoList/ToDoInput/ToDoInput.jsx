import React from "react";


function ToDoInput({taskInputText, addTask, updateInputTask}) {
    let addNewTask = () => {
        addTask()
    }
    let onInputChange = (event) => {
        let text = event.target.value
        updateInputTask(text)
    }

    return (
        <div className="inputField">
            <input type="text" placeholder="Add your new todo" onChange={onInputChange} value={taskInputText}/>
            <button  onClick={addNewTask} onKeyPress={() => addNewTask()}
                    disabled={taskInputText.length === 0}><i>+</i></button>
        </div>
    )
}

export default ToDoInput;