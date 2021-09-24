// --------------------for gameplayReducer-----------------------------------//


const answerQuestion = (answer, score, stats) => ({
  type: "ANSWER_QUESTION",
  payload: {
    answer: answer,
    score: score,
    stats: stats,
  },
});

const nextQuestion = () => ({ type: "NEXT_QUESTION" });

// --------------------for questionsReducer--------------------------//

const loadingQuestions = (settings, username) => ({
  type: "LOADING_QUESTIONS",
  payload: {
    settings: settings,
    username: username
  }
});

const loadQuestions = (questions) => ({
  type: "LOAD_QUESTIONS",
  payload: questions,
});

const endGame = () => ({ type: "END_GAME" });

// --------------------for scoresReducer------------------------------------//

const loadingScores = () => ({ type: "LOADING_SCORES" });

const loadScores = (scores) => ({ type: "LOAD_SCORES", payload: scores });

const setError = (err) => ({ type: "SET_ERROR", payload: `oh no! ${err}` });

//----------------------------------------------------------------------------//

const getQuestions = async (dispatch, settings, username) => {
  try {
    dispatch(loadingQuestions(settings, username));
    const questions = await questionsRequest(settings);
    dispatch(loadQuestions(questions));
  } catch (err) {
    dispatch(setError(err.message));
  }
};


const getScores = async (dispatch, filter) => {
  try {
    dispatch(loadingScores);
    const playerScores = await scoresRequest(filter);
    dispatch(loadScores(playerScores));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

// --------------------------------helpers-----------------------------------//

const questionsRequest = async (settings) => {
  try {
    const resp = await fetch(
      `https://opentdb.com/api.php?amount=${settings.amount}&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`
    );

    // const resp = await fetch(
    //   "https://opentdb.com/api.php?amount=10&category=&difficulty=&type="
    // );

    const data = await resp.json();
    const questionsArr = data.results;
    return questionsArr;
  } catch (err) {
    throw new Error("failed to fetch questions");
  }
};

const scoresRequest = async (filter) => {
  try {
    const resp = await fetch(
      filter ? `insert link to deployed server/${filter}` : "insert link"
    );
    const data = await resp.json();
    //expecting an array to be returned from API
    return data;
  } catch (err) {
    throw new Error("failed to fetch scores");
  }
};

export {
  getQuestions,
  getScores,
  answerQuestion,
  nextQuestion,
  endGame,
  setError,
  loadQuestions,
  loadingQuestions,
  loadScores,
  loadingScores,
};
