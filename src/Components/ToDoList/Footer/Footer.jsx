import React from "react";

function Footer({clearAllTasks, changeFilter, activeFilter}) {
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
    return (
        <div className="footer">
            <ul className="breadcrumb">
                {FILTERS_BTN.map(({text, id}) => (
                    <li><a
                        onClick={() => {
                            changeFilter(id)}}
                        key={id}
                        className={id === activeFilter ? "active" : 'filter-btn'}
                    >{text}</a></li>
                ))}
            </ul>
            <button onClick={onClearAll}>Clear All</button>
        </div>
    )
}

export default Footer;

