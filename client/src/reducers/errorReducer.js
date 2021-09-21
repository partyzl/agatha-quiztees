const initState = {
    message: null
}

const errorReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING_QUESTIONS':
            return { ...state, message: null };
        case 'LOADING_SCORES':
            return { ...state, message: null };
        case 'SET_ERROR':
            return { ...state, message: action.payload };
        default:
            return state;
    }
}

export default errorReducer;