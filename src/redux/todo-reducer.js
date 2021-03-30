const ADD_TASK = "ADD-TASK"
const UPDATE_TASK_INPUT = "UPDATE-TASK-INPUT"
const CLEAR_ALL_TASKS = "CLEAR-ALL-TASKS"
const TASK_COMPLETED = "TASK-COMPLETED"
const TASK_UNCOMPLETED = "TASK-UNCOMPLETED"
const DELETE_TASK = "DELETE-TASK"
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
const { SHOW_ALL } = VisibilityFilters



let todoId = 5;

let initialState = {
    tasks: [
        {id: 1, taskText: 'Написать проект на реакте', isDone: true},
        {id: 2, taskText: 'Дополнить гитхаб профиль', isDone: true},
        {id: 3, taskText: 'Систематизировать знания', isDone: false},
        {id: 4, taskText: 'Виджет погоды с запросом на сервер', isDone: false},
    ],
    taskInputText: "",
    visibilityFilter: VisibilityFilters.SHOW_ALL,
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let task = {id: todoId++, taskText: state.taskInputText, isDone: false}
            return {...state, tasks: [...state.tasks, task], taskInputText: ""}
        case UPDATE_TASK_INPUT:
            return {...state, taskInputText: action.text}
        case CLEAR_ALL_TASKS:
            return{...state, tasks: []}
        case TASK_COMPLETED:
            return {...state, tasks: state.tasks.map(t => {
                    if(t.id === action.taskId){
                        return {...t, isDone: true}
                    }
                  return  t
                })
            }
        case TASK_UNCOMPLETED:
            return{...state, tasks: state.tasks.map(t => {
                    if(t.id === action.taskId){
                        return {...t, isDone: false}
                    }
                    return t
                })
            }
        case DELETE_TASK:
            return{...state, tasks: state.tasks.filter(t => t.id !== action.taskId)}

        default:
            return state
    }
}

export const addTaskAC = () => ({type: ADD_TASK})
export const updateInputTaskAC = (text) => ({type: UPDATE_TASK_INPUT, text})
export const clearAllTasksAC = () => ({ type: CLEAR_ALL_TASKS})
export const taskCompletedAC = (taskId) => ({type: TASK_COMPLETED, taskId})
export const taskUncompletedAC = (taskId) => ({type: TASK_UNCOMPLETED, taskId})
export const deleteTaskAC = (taskId) => ({type: DELETE_TASK, taskId})
export function setVisibilityFilterAC(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export default todoReducer;