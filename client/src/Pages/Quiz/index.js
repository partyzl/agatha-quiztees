import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../actions';
import { Countdown, QuestionCard } from '../../components';
import { Header, Footer } from '../../Layout';


const Quiz = () => {
    const currentIndex = useSelector(state => state.gameplay.currentIndex)
    const questions = useSelector(state => state.quizInfo.questions)

    const [currentQuestion, setCurrentQuestion] = useState(questions[currentIndex])
    const [reset, setReset] = useState(false)

    // getQuestions(dispatch)

    useEffect(() => {
        if (currentIndex == questions.length) {
            console.log('going to results')
            document.location = '/results'
        } else {
            setCurrentQuestion(questions[currentIndex])
        }
        return () => setReset(existing => existing ? false : true)
    }, [currentIndex])

    return (
        <div>
            <Countdown duration={5} interval={1000} delay={3000} reset={reset} />
            <QuestionCard round={currentQuestion} />
            <span>{currentIndex}</span>
        </div >
    );
}

export default Quiz;
