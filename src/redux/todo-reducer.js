const ADD_TASK = 'todo/ADD-TASK';
const DELETE_TASK = 'todo/DELETE-TASK';


let initialState = {
   tasks: [
        {id: 1, taskText: 'Написать проект на реакте', isDone: false},
        {id: 2, taskText: 'Дополнить гитхаб профиль', isDone: false},
        {id: 3, taskText: 'Систематизировать знания', isDone: false},
    ],
}

const todoReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        tasks: [...state.tasks]
    }
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: 4,
                taskText: action.newTaskText,
                isDone: false,
            };
            let text = action.newTaskText;
            if (text === '') {
                alert('nothing to send, darling')
            } else {
                stateCopy.tasks.push(newTask);
            }
            return stateCopy;
        default:
            return state

    }
}

export const addTaskAC = (newTaskText) => ({type: ADD_TASK, newTaskText});


export default todoReducer;