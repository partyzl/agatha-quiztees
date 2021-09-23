const { loadQuestions, nextQuestion, runTimer } = require("../../actions");
const { store } = require("../../store");

const QuizStarted = (questionInfo) => {
  store.dispatch(loadQuestions(questionInfo));
  //console.log(questionInfo);
  document.location = "/quiz";
};

const incrementIdx = () => {
  store.dispatch(nextQuestion);
};

const updateTimer = (timer) => {
  store.dispatch(runTimer(timer))
  console.log(timer);
};

module.exports = { QuizStarted, incrementIdx, updateTimer };
