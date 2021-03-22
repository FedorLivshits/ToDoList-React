import todoReducer from "./todo-reducer";

const ADD_TASK = "ADD-TASK"
const UPDATE_TASK_INPUT = "UPDATE-TASK-INPUT"
const CLEAR_ALL_TASKS = "CLEAR-ALL-TASKS"

let store = {
    state: {
        todoPage: {
            tasks: [
                {id: 1, taskText: 'Написать проект на реакте', isDone: true},
                {id: 2, taskText: 'Дополнить гитхаб профиль', isDone: true},
                {id: 3, taskText: 'Систематизировать знания', isDone: false},
                {id: 4, taskText: 'Виджет погоды с запросом на сервер', isDone: false},
            ],
            taskInput: ""
        }
    },
    getState() {
        return this.state
    },
    _callSubscriber() {
        console.log("state was changed")
    },

    addTask() {
        let task = {
            id: 5,
            taskText: this.state.todoPage.taskInput,
            isDone: false
        }
        this.state.tasks.push(task)
        this.state.taskInput = ""
        this._callSubscriber(this.state)
    },

    updateTaskInput(text) {
        this.state.todoPage.taskInput = text
        this._callSubscriber(this.state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this.state.todoPage = todoReducer(this.state.todoPage, action)
        this._callSubscriber(this.state)
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


window.store = store

export default store