const { loadQuestions, nextQuestion } = require("../../actions");
const { store } = require("../../store");

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
