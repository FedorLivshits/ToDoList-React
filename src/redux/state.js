
let state = {
    tasks: [
        {id: 1, taskText: 'Написать проект на реакте', isDone: true},
        {id: 2, taskText: 'Дополнить гитхаб профиль', isDone: true},
        {id: 3, taskText: 'Систематизировать знания', isDone: false},
        {id: 4, taskText: 'Виджет погоды с запросом на сервер', isDone: false},
    ]
}

export let addTask = (taskText) => {
    let task = {
        id:5,
        taskText: taskText,
        isDone: false
    }
    state.tasks.push(task)
}

window.state = state

export default state