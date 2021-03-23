import store from "./store";

const ADD_TASK = "ADD-TASK"
const UPDATE_TASK_INPUT = "UPDATE-TASK-INPUT"
const CLEAR_ALL_TASKS = "CLEAR-ALL-TASKS"

let todoId = 5;

let initialState = {
    tasks: [],
}

const todoReducer = (state = initialState, action) => {

    // if(state.tasks.length){
    //     let todoId = 5;
    // }else {
    //     let todoId = 0
    // }
    switch (action.type) {
        case ADD_TASK:
            let task = {
                id: todoId++,
                taskText: state.taskInput,
                isDone: false
            }
            state.tasks.push(task)
            state.taskInput = ""
            return state
        case UPDATE_TASK_INPUT:
            state.taskInput = action.text
            return state
        case CLEAR_ALL_TASKS:
            state.tasks = []
            return state
        default:
            return state
    }
}

export const addTaskAC = () => ({type: ADD_TASK})

export const updateInputTaskAC = (text) => {
    return {type: UPDATE_TASK_INPUT, text}
}

export const clearAllTasksAC = () => {
    return {
        type: CLEAR_ALL_TASKS
    }
}


export default todoReducer;