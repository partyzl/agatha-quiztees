const initState = {
    playerScores: []
}

const scoresReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_SCORES':
            return { ...state, playerScores: action.payload };
        default:
            return state;
    }
}

export default scoresReducer;