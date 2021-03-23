const ADD_TASK = "ADD-TASK"
const UPDATE_TASK_INPUT = "UPDATE-TASK-INPUT"
const CLEAR_ALL_TASKS = "CLEAR-ALL-TASKS"

let todoId = 5;

let initialState = {
        tasks: [
            {id: 1, taskText: 'Написать проект на реакте', isDone: true},
            {id: 2, taskText: 'Дополнить гитхаб профиль', isDone: true},
            {id: 3, taskText: 'Систематизировать знания', isDone: false},
            {id: 4, taskText: 'Виджет погоды с запросом на сервер', isDone: false},
        ],
        taskInputText: ""
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
                taskText: state.taskInputText,
                isDone: false
            }
            state.tasks.push(task)
            state.taskInputText = ""
            return state
        case UPDATE_TASK_INPUT:
            state.taskInputText = action.text
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