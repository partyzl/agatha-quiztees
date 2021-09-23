
const { loadQuestions } = require("../../actions")
const { store } = require("../../store")



const QuizStarted = (questionInfo) => {
    // const dispatch = useDispatch()
    store.dispatch(loadQuestions(questionInfo))
    // dispatch(loadQuestions(questionInfo))
    document.location = '/quiz'
}

module.exports = { QuizStarted }