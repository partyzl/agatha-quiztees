const initState =
{
    questions: [],
    gameSettings: {},
    stage: null,
    error: null
}

const questionsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING_QUESTIONS':
            return { ...state, gameSettings: action.payload, stage: 'prepping', error: null };
        case 'LOAD_QUESTIONS':
            return { ...state, questions: action.payload, stage: 'started' };
        case 'END_GAME':
            return { ...state, questions: [], gameSettings: {}, stage: 'finished' };
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default questionsReducer;