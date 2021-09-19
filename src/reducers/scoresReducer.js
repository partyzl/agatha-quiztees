const initState = {
    playeScores: [],
    error: null
}

const scoresReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING_SCORES':
            return { ...state, error: null };
        case 'LOAD_SCORES':
            return { ...state, playerScores: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default scoresReducer;