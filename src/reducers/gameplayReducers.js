const initState =
{
    answers: [],
    score: [],
    stats: [],
    currentIndex: 0,
    answered: false
}


const gameplayReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ANSWER_QUESTION':
            return (
                {
                    ...state,
                    answers: [...state.answers, action.payload.answer],
                    score: action.payload.score, 
                    stats: action.payload.stats,
                    answered: true
                }
            );
        case 'NEXT_QUESTION':
            return { ...state, currentIndex: state.currentIndex + 1, answered: false };
        default:
            return state;
    }
}

export default gameplayReducer;