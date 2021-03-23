import React from 'react'
import {
    addTaskAC,
} from "../../redux/todo-reducer";
import ToDoList from "./ToDoList";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTaskText) => {
            dispatch(addTaskAC(newTaskText));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)