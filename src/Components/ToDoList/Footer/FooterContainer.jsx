import React from "react";
import {clearAllTasksAC} from "../../../redux/todo-reducer";
import Footer from "./Footer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        undefined
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        clearAllTasks: (text) => {
            dispatch(clearAllTasksAC(text));
        }
    }

}


const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer;
