const { loadQuestions, nextQuestion } = require("../../actions");
const { store } = require("../../store");

<<<<<<< HEAD
const quizStarted = (questionInfo) => {
    store.dispatch(loadQuestions(questionInfo))
    document.location = '/quiz'
}

const incrementIndex = () => {
    store.dispatch(nextQuestion)
}

module.exports = { quizStarted, incrementIndex }
=======
const QuizStarted = (questionInfo) => {
  store.dispatch(loadQuestions(questionInfo));
  //console.log(questionInfo);
  document.location = "/quiz";
};

const incrementIdx = () => {
  store.dispatch(nextQuestion);
};

const runTimer = (timer) => {
  console.log(timer);
};

module.exports = { QuizStarted, incrementIdx, runTimer };
>>>>>>> 86bf1e7bb7cbad933ff9bb0ca229055b50156750
