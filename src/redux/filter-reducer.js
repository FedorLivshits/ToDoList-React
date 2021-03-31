const CHANGE_FILTER = 'my-app/ToDo-reducer/CHANGE_FILTER';

let initialState = {
    activeFilter: 'all'
}

const filterReducer = (state = initialState, { type, activeFilter }) => {
    switch (type) {
        case CHANGE_FILTER: {
            return {activeFilter: activeFilter};
        }
        default:
            return state;
    }
}

export const changeFilterAC = (activeFilter) => ({type: CHANGE_FILTER, activeFilter});

export default filterReducer;

