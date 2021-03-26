import React from "react";
import {connect} from "react-redux";
import ToDoList from "./ToDoList";

let mapStateToProps = (state) => {
    return {
        tasks: state.todoPage.tasks,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        undefined
    }
}
const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)

export default ToDoListContainer
