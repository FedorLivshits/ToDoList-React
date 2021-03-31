import React from "react";
import {connect} from "react-redux";
import {deleteTaskAC, taskCompletedAC, taskUncompletedAC} from "../../../redux/todo-reducer";
import Tasks from "./Tasks";

let mapStateToProps = (state, ownProps) => {
    return {
        tasksList: ownProps
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        completeTask: (taskId) => {
            dispatch(taskCompletedAC(taskId));
        },
        unCompleteTask: (taskId) => {
            dispatch(taskUncompletedAC(taskId))
        },
        deleteTask: (taskId) => {
            dispatch(deleteTaskAC(taskId))
        }
    }
}
const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks)

export default TasksContainer
