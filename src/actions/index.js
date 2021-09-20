// --------------------for gameplayReducer-----------------------------------//
const answerQuestion = (answers, score, stats) => ({
    type: 'ANSWER_QUESTION',
    payload: {
        answers: answers,
        score: score,
        stats: stats
    }
});

const nextQuestion = () => ({ type: 'NEXT_QUESTION' });

// --------------------for questionsReducer--------------------------//

const loadingQuestions = (settings) => ({ type: 'LOADING_QUESTIONS', payload: settings });

const loadQuestions = (questions) => ({ type: 'LOAD_QUESTIONS', payload: questions });

const endGame = () => ({ type: 'END_GAME' });

// --------------------for scoresReducer------------------------------------//

const loadingScores = () => ({ type: 'LOADING_SCORES' });

const loadScores = (scores) => ({ type: 'LOAD_SCORES', payload: scores });

const setError = (err) => ({ type: 'SET_ERROR', payload: `oh no! ${err}` });

// added this for the Question Page render
export const localScores = (score) => ({ type: 'UPDATE_LOCAL_SCORES', payload: score })

//----------------------------------------------------------------------------//

const getQuestions = async (dispatch, settings) => {
    try {
        dispatch(loadingQuestions(settings));
        const questions = await questionsRequest(settings);
        dispatch(loadQuestions(questions));
    } catch (err) {
        dispatch(setError(err.message));
    }
}

const getScores = async (filter) => {
    try {
        dispatch(loadingScores);
        const playerScores = await scoresRequest(filter);
        dispatch(loadScores(playerScores));
    } catch (err) {
        dispatch(setError(err.message));
    }
}

// --------------------------------helpers-----------------------------------//

const questionsRequest = async (settings) => {
    try {
        const resp = await fetch(`https://opentdb.com/api.php?amount=${settings.amount}&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`);
        const data = await resp.json();
        const questionsArr = data.results;
        return questionsArr;
    } catch (err) {
        throw new Error('failed to fetch questions');
    }
}

const scoresRequest = async (filter) => {
    try {
        const resp = await fetch(filter ? `insert link to deployed server/${filter}` : 'insert link');
        const data = await resp.json();
        //expecting an array to be returned from API
        return data;
    } catch (err) {
        throw new Error('failed to fetch scores');
    }
}

export {getQuestions, getScores, answerQuestion, nextQuestion, endGame, setError, loadQuestions, loadingQuestions, loadScores, loadingScores};
