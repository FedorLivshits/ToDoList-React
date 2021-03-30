import todoReducer from "./todo-reducer";

const All_TASKS = "All_TASKS"
const IN_PROGRESS = "IN_PROGRESS"
const DONE = "DONE"

let initialState = {
    filter: [
        {id: 1, view: "all"},
        {id: 2, view: "in-progress"},
        {id: 3, view: "done"}

    ]
}

export const filterReducer = (state = initialState, action) =>{
    switch (action.type) {
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

export const allTasksFilterAC = (id) => ({type: All_TASKS, id})
export const inProgressFilterAC = (id) => ({type: IN_PROGRESS, id})
export const doneFilterAC = (id) => ({type: DONE, id})

export default filterReducer;