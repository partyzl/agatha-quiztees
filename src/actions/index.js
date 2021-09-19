const answerQuestion = (answers, score, stats) => ({
    type: 'ANSWER_QUESTION',
    payload: {
        answers: answers,
        score: score,
        stats: stats
    }
})

const nextQuestion = () => ({
    type: 'NEXT_QUESTION'
})

const setError = (err) => ({
    type: 'SET_ERROR',
    payload: `oh no!${err.message}`
})



