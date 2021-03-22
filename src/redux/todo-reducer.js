const ADD_TASK = "ADD-TASK"
const UPDATE_TASK_INPUT = "UPDATE-TASK-INPUT"
const CLEAR_ALL_TASKS = "CLEAR-ALL-TASKS"


let initialState = {
    tasks: [],
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            let task = {
                id: 5,
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

export default todoReducer;