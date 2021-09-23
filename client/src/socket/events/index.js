
const { loadQuestions, nextQuestion } = require("../../actions")
const { store } = require("../../store")



const quizStarted = (questionInfo) => {
    store.dispatch(loadQuestions(questionInfo))
    document.location = '/quiz'
}

const incrementIndex = () => {
    store.dispatch(nextQuestion)
}

module.exports = { quizStarted, incrementIndex }