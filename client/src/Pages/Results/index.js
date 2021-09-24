import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions, endGame } from '../../actions'
import { LeaderboardList, Button } from '../../components'
import "./styles.css";

const Results = () => {
    const dispatch = useDispatch()
    const gameData = useSelector(state => state.gameplay)
    const quizData = useSelector(state => state.quizInfo)

    const [result, setResult] = useState()
    const [resultsBoard, setResultsBoard] = useState()


    useEffect(() => {
        if (!result) {
            setResult({
                username: quizData.username,
                category: quizData.questions[0].category,
                score: calculateScores()
            })
        } else {
            setResultsBoard(<LeaderboardList scores={result} />)
        }
    }, [result])

    function calculateScores() {
        let difficultyMultiplier;
        switch (quizData.settings.difficulty) {
            case 'easy':
                difficultyMultiplier = 1;
                break;
            case 'medium':
                difficultyMultiplier = 1.5;
                break;
            case 'hard':
                difficultyMultiplier = 2;
                break;
            default:
                difficultyMultiplier = 1;
                break;
        }
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
        const score = streak < quizData.questions.length * 0.5 ? correctAnswers + 0 : correctAnswers;
        console.log(score)
        return score * difficultyMultiplier;
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
        <div className="allButtonContainerResults">
            <div className="scoreTable">
                {resultsBoard}
            </div>
            <div className="buttonCollapseResults">
                <Button onClick={playAgain} value="play again" />
                <Button onClick={goHome} value="return home" />
            </div>
        </div>
    );

}

export default Results;
