import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions, endGame } from '../../actions'
import { LeaderboardList, Button } from '../../components'

const Results = () => {
    const dispatch = useDispatch()
    const gameData = useSelector(state => state.gameplay)
    const quizData = useSelector(state => state.quizInfo)

    //const [playerScore, setPlayerScore] = useState()
    const [result, setResult] = useState()
    const [resultsBoard, setResultsBoard] = useState()


    useEffect(() => {
        if (!result) {
            setResult({
                username: 'bob',
                category: 'category goes here',
                score: calculateScores()
            })
        } else{
            setResultsBoard(<LeaderboardList scores={result} />)
        }
    }, [result])

    function calculateScores() {
        console.log('is running')
        let correctAnswers = 0;
        let streak = 0
        for (let i = 0; i < gameData.answers.length; i++) {
            if (gameData.answers[i] == 'correct') {
                correctAnswers++;
                streak++;
            }
            else {
                streak = 0;
            }
        }
        console.log(correctAnswers)
        const score = streak < quizData.questions.length * 0.5 ? correctAnswers + 0 : correctAnswers;
        return score;
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
            <p>Results</p>
            {resultsBoard}
        </div>
    )
}

export default Results;
