const ADD_TASK = "ADD-TASK"
const UPDATE_TASK_INPUT = "UPDATE-TASK-INPUT"
const CLEAR_ALL_TASKS = "CLEAR-ALL-TASKS"
const TASK_COMPLETED = "TASK-COMPLETED"
const TASK_UNCOMPLETED = "TASK-UNCOMPLETED"

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
debugger
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
            return {
                ...state,
                tasks: [...state.tasks, task],
                taskInputText: ""
            }
        case UPDATE_TASK_INPUT:
            return {
                ...state,
                taskInputText: action.text
            }
        case CLEAR_ALL_TASKS:
            return{
                ...state,
                tasks: []
            }
        case TASK_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.map(t => {
                    if(t.id === action.taskId){
                        return {...t, isDone: true}
                    }
                  return  t
                })
            }
        case TASK_UNCOMPLETED:
            return{
                ...state,
                tasks: state.tasks.map(t => {
                    if(t.id === action.taskId){
                        return {...t, isDone: false}
                    }
                    return t
                })
            }
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
export const taskCompletedAC = (taskId) => ({type: TASK_COMPLETED, taskId})
export const taskUncompletedAC = (taskId) => ({type: TASK_UNCOMPLETED, taskId})


export default todoReducer;