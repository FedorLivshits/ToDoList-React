import React from "react";
import {allTasksFilterAC, clearAllTasksAC, doneFilterAC, inProgressFilterAC} from "../../../redux/todo-reducer";
import Footer from "./Footer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        tasks: state.todoPage.tasks,
        filter: state.todoPage.filter
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        clearAllTasks: (text) => {
            dispatch(clearAllTasksAC(text));
        },
        allTasks: (id) => {
            dispatch(allTasksFilterAC(id))
        },
        inProgressTasks: (id) => {
            dispatch(inProgressFilterAC(id))
        },
        doneTasks: (id) => {
            dispatch(doneFilterAC(id))
        }
    }

}


const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer;

