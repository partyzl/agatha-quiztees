import { combineReducers } from 'redux'

import gameplayReducer from './gameplayReducers'
import questionsReducer from './questionsReducer'
import scoresReducer from './scoresReducer'

const rootReducer = combineReducers(
    {
        gameplay: gameplayReducer,
        quizInfo: questionsReducer,
        leaderBoard: scoresReducer
    })

export default rootReducer