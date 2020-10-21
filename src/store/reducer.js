
const actionKeys = {
    ADD: 'ADD',
    CLEAR: 'CLEAR'
};


export const actionTypes = {
    add,
    clear
};

function add(value) {
    return { type: actionKeys.ADD, value };
}

function clear() {
    return { type: actionKeys.CLEAR };
}


export function rootReducer(state = {name:"naresh"}, action) {
    console.log(action.type, actionTypes.ADD)
    switch (action.type) {
        case actionKeys.ADD:
            console.log(action)
            return {
                type: 'add',
                ...action.value
            };
        case actionKeys.CLEAR:
            return {
                type: 'clear',
                ...action.value
            };
        default:
            return state
    }
}