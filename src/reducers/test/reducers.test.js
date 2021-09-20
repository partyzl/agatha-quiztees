import rootReducer from '..'
import { setError, loadingQuestions, loadingScores, loadScores, answerQuestion } from '../../actions'
import '../../actions'
import { store } from '../../store'

describe('rootReducer', () => {

    test('the state returns unchanged if dispatched action type is undefined', () => {
        const originalState = {};
        const newState = rootReducer(originalState, {type: undefined} )
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

    describe('question actions', () => {
        test('ANSWER_QUESTION updates game scores', () => {
            const originalScore = store.getState().gameplay.score
            store.dispatch(answerQuestion([], 'newscores', []))
            const newState = store.getState()
            expect(newState.gameplay.score).not.toEqual(originalScore)
        })

    //     test('ANSWER_QUESTION updates player answers by +1', () => {
    //         expect(gameplay.answers.length).toEqual(answeredQuestions + 1)
    //     })

    //     test('ANSWER_QUESTION updates player stats', () => {
    //         expect(gameplay.stats).not.toEqual(previousStats)
    //     })

    //     test('NEXT_QUESTION increases currentIndex by +1', () => {
    //         expect(gameplay.currentIndex).toEqual(previousIndex + 1)
    //     })
    })

})