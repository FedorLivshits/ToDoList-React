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
    const amount = () => {
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
                <button onClick={onClearAll}>Clear All</button>
            </div>
            <div className="active-tasks__counter">Активных задач: {amount()}</div>
        </>
    )
}

export default Footer;

