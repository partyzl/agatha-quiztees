const initState =
{
    answers: [],
    score: [],
    stats: [],
    currentIndex: 0,
    error: null
}


const gameplayReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ANSWER_QUESTION':
            return { ...state, answers: action.payload.answers, score: action.payload.score };
        case 'NEXT_QUESTION':
            return { ...state, currentIndex: state.currentIndex + 1 };
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default gameplayReducer;