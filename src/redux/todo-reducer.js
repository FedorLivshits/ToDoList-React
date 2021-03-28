const ADD_TASK = "ADD-TASK"
const UPDATE_TASK_INPUT = "UPDATE-TASK-INPUT"
const CLEAR_ALL_TASKS = "CLEAR-ALL-TASKS"
const TASK_COMPLETED = "TASK-COMPLETED"
const TASK_UNCOMPLETED = "TASK-UNCOMPLETED"
const DELETE_TASK = "DELETE-TASK"
const All_TASKS = "All_TASKS"
const IN_PROGRESS = "IN_PROGRESS"
const DONE = "DONE"


let todoId = 5;

let initialState = {
    tasks: [
        {id: 1, taskText: 'Написать проект на реакте', isDone: true},
        {id: 2, taskText: 'Дополнить гитхаб профиль', isDone: true},
        {id: 3, taskText: 'Систематизировать знания', isDone: false},
        {id: 4, taskText: 'Виджет погоды с запросом на сервер', isDone: false},
    ],
    taskInputText: "",
    filter: [
        {id: 1, view: "all"},
        {id: 2, view: "in-progress"},
        {id: 3, view: "done"}

    ]
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
        case All_TASKS:
            return{...state, tasks: state.tasks.filter(t => t)}
        case IN_PROGRESS:
            return{...state, tasks: state.tasks.filter(t => !t.isDone)}
        case DONE:
            return{...state, tasks: state.tasks.filter(t => t.isDone)}
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
export const allTasksFilterAC = (id) => ({type: All_TASKS, id})
export const inProgressFilterAC = (id) => ({type: IN_PROGRESS, id})
export const doneFilterAC = (id) => ({type: DONE, id})


export default todoReducer;