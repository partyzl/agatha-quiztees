const initState =
{
    questions: [],
    settings: {},
    stage: null,
}

const questionsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING_QUESTIONS':
            return { ...state, questions: [], settings: action.payload, stage: 'prepping' };
        case 'LOAD_QUESTIONS':
            return { ...state, questions: action.payload, stage: 'started' };
        case 'END_GAME':
            return { ...state, questions: [], settings: {}, stage: 'finished' };
        default:
            return state;
    }
}

export default questionsReducer;