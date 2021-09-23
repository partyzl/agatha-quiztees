
const { loadQuestions, nextQuestion } = require("../../actions")
const { store } = require("../../store")



const QuizStarted = (questionInfo) => {
    store.dispatch(loadQuestions(questionInfo))
    document.location = '/quiz'
}

const nextQuestion = () => {
    store.dispatch(nextQuestion)
}

module.exports = { QuizStarted }