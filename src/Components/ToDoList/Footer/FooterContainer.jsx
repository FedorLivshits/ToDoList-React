import React from "react";
import {clearAllTasksAC} from "../../../redux/todo-reducer";
import Footer from "./Footer";
import {connect} from "react-redux";
import {changeFilterAC} from "../../../redux/filter-reducer";



const mapStateToProps = (state) => {
    return (
        {
            activeFilter: state.ToDoFilter.activeFilter
        }
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        clearAllTasks: (text) => {
            dispatch(clearAllTasksAC(text));
        },
        changeFilter: (id) => {
            dispatch(changeFilterAC(id))
        }
    }

}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer;

