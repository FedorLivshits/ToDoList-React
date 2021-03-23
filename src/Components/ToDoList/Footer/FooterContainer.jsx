import React from "react";
import {clearAllTasksAC} from "../../../redux/todo-reducer";
import Footer from "./Footer";


function FooterContainer(props) {
    let clearAll = () => {
        props.store.dispatch(clearAllTasksAC())
    }
    return ( <Footer clearAlltasks={clearAll}/> )
}

export default FooterContainer;

