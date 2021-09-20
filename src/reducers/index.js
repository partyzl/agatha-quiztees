import { combineReducers } from 'redux'

import gameplayReducer from './gameplayReducers'
import questionsReducer from './questionsReducer'
import scoresReducer from './scoresReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers(
    {
        gameplay: gameplayReducer,
        quizInfo: questionsReducer,
        leaderBoard: scoresReducer, 
        error: errorReducer
    })

export default rootReducer