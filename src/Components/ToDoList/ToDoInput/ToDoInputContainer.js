import React from "react";
import {addTaskAC, updateInputTaskAC} from "../../../redux/todo-reducer";
import ToDoInput from "./ToDoInput";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        todoPage: state.todoPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => {
            dispatch(addTaskAC());
        },
        updateInputTask: (text) => {
            dispatch(updateInputTaskAC(text));
        }
    }
}
const ToDoInputContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoInput)

export default ToDoInputContainer
