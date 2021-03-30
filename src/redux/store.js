// import todoReducer from "./todo-reducer";
//
//
// let store = {
//     state: {
//         todoPage: {
//             tasks: [
//                 {id: 1, taskText: 'Написать проект на реакте', isDone: true},
//                 {id: 2, taskText: 'Дополнить гитхаб профиль', isDone: true},
//                 {id: 3, taskText: 'Систематизировать знания', isDone: false},
//                 {id: 4, taskText: 'Виджет погоды с запросом на сервер', isDone: false},
//             ],
//             taskInput: ""
//         }
//     },
//     getState() {
//         return this.state
//     },
//     _callSubscriber() {
//         console.log("state was changed")
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         this.state.todoPage = todoReducer(this.state.todoPage, action)
//         this._callSubscriber(this.state)
//     }
// }
//
//
// window.store = store
//
// export default store