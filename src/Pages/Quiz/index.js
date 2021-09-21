import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Countdown, QuestionCard } from '../../components';
import { getQuestions } from '../../actions';


const Quiz = () => {
    //temporary
    const dispatch = useDispatch()

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


    //if the index is the equal to the questions.length - 1 

    return (
        <div>
            <Countdown duration={5} interval={1000} delay={3000} reset={reset} />
            <QuestionCard round={currentQuestion} />
            <span>{currentIndex}</span>
        </div >
    );
}

export default Quiz;
