import React from "react";
import {connect} from "react-redux";
import Task from "./Task";
import {taskCompletedAC, taskUncompletedAC} from "../../../redux/todo-reducer";

let mapStateToProps = (state) => {
    return {
        tasks: state.todoPage.tasks,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        completeTask: (taskId) => {
            dispatch(taskCompletedAC(taskId));
        },
        unCompleteTask: (taskId) => {
            dispatch(taskUncompletedAC(taskId))
        }
    }
}
const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(Task)

export default TaskContainer
