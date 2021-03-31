import React from "react";
import {clearAllTasksAC} from "../../redux/todo-reducer";
import {connect} from "react-redux";
import {changeFilterAC} from "../../redux/filter-reducer";
import ToDoList from "./ToDoList";

const ToDoListContainer = (props) => {
    const filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'done':
                return tasks.filter(task => task.isDone);
            case 'in progress':
                return tasks.filter(task => !task.isDone)
            default:
                return tasks;
        }
    }
    const filteredTasks = filterTasks(props.tasks, props.activeFilter);
    return (
        <ToDoList tasksList={filteredTasks} changeFilter={props.changeFilter} clearAllTasks={props.clearAllTasks}
                  activeFilter={props.activeFilter}/>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            tasks: state.todoPage.tasks,
            activeFilter: state.ToDoFilter.activeFilter
        }
    )
}


export default connect(mapStateToProps, null)(ToDoListContainer);
