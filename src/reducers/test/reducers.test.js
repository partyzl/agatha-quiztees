import rootReducer from '..'
import { setError, loadingQuestions, loadingScores, loadScores, answerQuestion, nextQuestion, loadQuestions, endGame} from '../../actions'
import '../../actions'
import { store } from '../../store'

describe('rootReducer', () => {

    test('the state returns unchanged if dispatched action type is undefined', () => {
        const originalState = {};
        const newState = rootReducer(originalState, { type: undefined })
        expect(newState).toEqual(originalState)
    })

    describe('error actions', () => {
        test('SET_ERROR updates error message with string', () => {
            store.dispatch(setError('systems malfunction'))
            const newState = store.getState()
            expect(newState.error.message).toEqual('oh no! systems malfunction')
            expect(typeof newState.error.message).toBe('string')
        })

        test('LOADING_QUESTIONS sets error to null', () => {
            store.dispatch(setError('error'))
            store.dispatch(loadingQuestions())
            const newState = store.getState()
            expect(newState.error.message).toBe(null)
        })

        test('LOADING_SCORES sets error to null', () => {
            store.dispatch(setError('error'))
            store.dispatch(loadingScores())
            const newState = store.getState()
            expect(newState.error.message).toBe(null)
        })
    })

    describe('score actions', () => {
        test('LOAD_SCORES updates leaderboard scores', () => {
            store.dispatch(loadScores([9, 8, 7, 6]))
            const newState = store.getState()
            expect(newState.leaderboard.playerScores).toEqual([9, 8, 7, 6])
        })
    })

    describe('gameplay actions', () => {
        test('ANSWER_QUESTION updates game scores', () => {
            const originalScore = store.getState().gameplay.score
            store.dispatch(answerQuestion([], 'newscores', []))
            const newState = store.getState()
            expect(newState.gameplay.score).not.toEqual(originalScore)
        })

        test('ANSWER_QUESTION updates player answers by +1', () => {
            const answeredQuestions = store.getState().gameplay.answers.length
            store.dispatch(answerQuestion(['new answer'], '', []))
            const newState = store.getState()
            expect(newState.gameplay.answers.length).toEqual(answeredQuestions + 1)
        })

        test('ANSWER_QUESTION updates player stats', () => {
            const previousStats = store.getState().gameplay.stats
            store.dispatch(answerQuestion([], '', [{ speed: 100 }]))
            const newState = store.getState()
            expect(newState.gameplay.stats).not.toEqual(previousStats)
        })

        test('NEXT_QUESTION increases currentIndex by +1', () => {
            const previousIndex = store.getState().gameplay.currentIndex;
            store.dispatch(nextQuestion())
            const newState = store.getState()
            expect(newState.gameplay.currentIndex).toEqual(previousIndex + 1)
        })
    })

    describe('questions actions', () => {
        test('LOADING_QUESTIONS sets quiz stage to prepping', () => {
            store.dispatch(loadingQuestions())
            const newState = store.getState()
            expect(newState.quizInfo.stage).toEqual('prepping')
        })

        test('LOAD_QUESTIONS updates quiz questions and sets stage to started', () => {
            let questions = [{q: 'where is wally?', a:'wanted answers? how naive...'}]
            store.dispatch(loadQuestions(questions))
            const newState = store.getState()
            expect(newState.quizInfo.stage).toEqual('started')
            expect(newState.quizInfo.questions).toEqual(questions)
        })

        test('END_GAME sets game staged to finished', () => {
            store.dispatch(endGame())
            const newState = store.getState()
            expect(newState.quizInfo.stage).toEqual('finished')
        })

        test('END_GAME clears questions from store', () => {
            let questions = [{q: 'where is wally?', a:'wanted answers? how naive...'}]
            store.dispatch(loadQuestions(questions))
            const state = store.getState()
            expect(state.quizInfo.questions).toEqual(questions)
            store.dispatch(endGame())
            const newState = store.getState()
            expect(newState.quizInfo.questions).toEqual([])
        })

        test('END_GAME clears quiz settings from store', () => {
            let settings = {type: 'multiple'}
            store.dispatch(loadingQuestions(settings))
            const state = store.getState()
            expect(state.quizInfo.settings).toEqual(settings)
            store.dispatch(endGame())
            const newState = store.getState()
            expect(newState.quizInfo.settings).toEqual({})
        })
    })
})