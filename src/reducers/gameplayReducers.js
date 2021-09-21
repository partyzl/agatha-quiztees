const initState =
{
    answers: [],
    score: [],
    stats: [],
    currentIndex: 0
}


const gameplayReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ANSWER_QUESTION':
            return { ...state, answers: action.payload.answers, score: action.payload.score, stats: action.payload.stats };
        case 'NEXT_QUESTION':
            return { ...state, currentIndex: state.currentIndex + 1 };
        default:
            return state;
    }
}

export default gameplayReducer;