import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getQuestions } from '../../actions';
import { Countdown, QuestionCard } from '../../components';
import { Header, Footer } from '../../Layout';


const Quiz = () => {
    const currentIndex = useSelector(state => state.gameplay.currentIndex)
    const questions = useSelector(state => state.quizInfo.questions)
    const timer = useSelector(state => state.gameplay.timer)

    const [currentQuestion, setCurrentQuestion] = useState(questions[currentIndex])

    let options = randomiser([currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]);

    useEffect(() => {
        if (currentIndex == questions.length) {
            console.log('going to results')
            document.location = '/results'
        } else {
            setCurrentQuestion(questions[currentIndex])
        }
    }, [currentIndex])

    useEffect(() => {
        options = randomiser([currentQuestion.correct_answer, ...currentQuestion.incorrect_answers])
    }, [currentQuestion])

    function randomiser(options) {
        const randomised = options.sort(() => Math.random() - 0.5)
        return randomised
    }

    return (
        <div>
            <Countdown timer={timer}/>
            <QuestionCard round={currentQuestion} options={options} />
            <span>{currentIndex}</span>
        </div >
    );
}

export default Quiz;
