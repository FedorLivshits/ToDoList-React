import './App.css';
import React from "react";

function App() {
    return (
        <div className="App-header">
            <header className="header">
                <h1 className="title">
                    ToDoList
                </h1>
                <nav className="menu">

                </nav>
            </header>
            <div className="main">
                <section className="sidenav sidenav-fixed">
                    <aside className="menu">
                        <ul className="menu__list-ru">
                            <li><a>Мои задачи</a></li>
                            <li><a>Создать доску</a></li>
                            <li><a>О проекте</a></li>
                        </ul>
                    </aside>
                </section>
                <div className="container">
                    <section className="todo__page-inner">
                        <div className="new">
                            <div className="new__title">
                                Новые задачи
                            </div>
                            <input type="text" className="new__tasks"/>
                            <div className="tasks">
                                <ul>
                                    <li><input type="checkbox"/> task1</li>
                                </ul>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
}


export default App;

