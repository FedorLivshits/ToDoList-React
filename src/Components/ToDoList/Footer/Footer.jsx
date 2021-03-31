import React from "react";

function Footer({clearAllTasks, changeFilter, activeFilter, tasks}) {
    const FILTERS_BTN = [
        {
            text: 'All',
            id: 'all',
        },
        {
            text: 'In progress',
            id: 'in progress',
        },
        {
            text: 'Done',
            id: 'done'
        }
    ];

    let onClearAll = () => {
        clearAllTasks()
    }

    const amount = (activeFilter) => {
        switch (activeFilter) {
            case 'all': {
                let allTasks = tasks.filter(task => task)
                return ("All tasks: " + allTasks.length)
            }
            case'in progress': {
                let activeTasks = tasks.filter(task => !task.isDone)
                return ("In progress tasks: " + activeTasks.length)
            }
            case 'done':   {
                let doneTasks = tasks.filter(task => task.isDone)
                return ("Done tasks: " + doneTasks.length)
            }
        }
        let activeTasks = tasks.filter(task => !task.isDone)
        return activeTasks.length
    }
    return (
        <>
            <div className="footer">
                <ul className="breadcrumb">
                    {FILTERS_BTN.map(({text, id}) => (
                        <li><a
                            onClick={() => {
                                changeFilter(id)
                            }}
                            key={id}
                            className={id === activeFilter ? "active" : 'filter-btn'}
                        >{text}</a></li>
                    ))}
                </ul>
                <button onClick={onClearAll}  disabled={tasks.length === 0}>Clear All</button>
            </div>
            <div className="active-tasks__counter">{amount(activeFilter)}</div>
        </>
    )
}

export default Footer;

