import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions, endGame } from '../../actions'
import { Button } from '../../components'

const Results = () => {
    const dispatch = useDispatch()
    const gameData = useSelector(state => state.gameplay)
    const quizData = useSelector(state => state.quizInfo)


    useEffect(() => {
        calculateScores(gameData)
    }, [])

    function calculateScores(data) {

        // for(let i=0; i<data.answers.length; i++){
        //     if (data.answers[i] == quizData.questions[i].correct_answer){
        //         correct_count
        //     }
        // }



        return null
    }

    async function playAgain() {
        await getQuestions(dispatch, quizData.settings)
        document.location = '/quiz'
    }

    function goHome() {
        dispatch(endGame())
        document.location = '/'
    }

    return (
        <div>
            <Button onClick={playAgain} value='play again' />
            <Button onClick={goHome} value='return home' />
        </div>
    )
}

export default Results;
